import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { PendingUserLayoutsController } from "../pendingUserLayouts.controller";
import { PendingUserLayoutsService } from "../pendingUserLayouts.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  userId: "exampleUserId",
  layoutVersion: 42,
  layoutSubversion: 42,
  createdOn: new Date(),
  raisedBy: "exampleRaisedBy",
  authorisedBy: "exampleAuthorisedBy",
};
const CREATE_RESULT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  userId: "exampleUserId",
  layoutVersion: 42,
  layoutSubversion: 42,
  createdOn: new Date(),
  raisedBy: "exampleRaisedBy",
  authorisedBy: "exampleAuthorisedBy",
};
const FIND_MANY_RESULT = [
  {
    id: "exampleId",
    createdAt: new Date(),
    updatedAt: new Date(),
    userId: "exampleUserId",
    layoutVersion: 42,
    layoutSubversion: 42,
    createdOn: new Date(),
    raisedBy: "exampleRaisedBy",
    authorisedBy: "exampleAuthorisedBy",
  },
];
const FIND_ONE_RESULT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  userId: "exampleUserId",
  layoutVersion: 42,
  layoutSubversion: 42,
  createdOn: new Date(),
  raisedBy: "exampleRaisedBy",
  authorisedBy: "exampleAuthorisedBy",
};

const service = {
  createPendingUserLayouts() {
    return CREATE_RESULT;
  },
  pendingUserLayoutsItems: () => FIND_MANY_RESULT,
  pendingUserLayouts: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("PendingUserLayouts", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: PendingUserLayoutsService,
          useValue: service,
        },
      ],
      controllers: [PendingUserLayoutsController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /pendingUserLayouts", async () => {
    await request(app.getHttpServer())
      .post("/pendingUserLayouts")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        createdOn: CREATE_RESULT.createdOn.toISOString(),
      });
  });

  test("GET /pendingUserLayouts", async () => {
    await request(app.getHttpServer())
      .get("/pendingUserLayouts")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
          createdOn: FIND_MANY_RESULT[0].createdOn.toISOString(),
        },
      ]);
  });

  test("GET /pendingUserLayouts/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/pendingUserLayouts"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /pendingUserLayouts/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/pendingUserLayouts"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
        createdOn: FIND_ONE_RESULT.createdOn.toISOString(),
      });
  });

  test("POST /pendingUserLayouts existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/pendingUserLayouts")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        createdOn: CREATE_RESULT.createdOn.toISOString(),
      })
      .then(function () {
        agent
          .post("/pendingUserLayouts")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
