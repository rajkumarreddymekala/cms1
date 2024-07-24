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
import { UserLayoutsController } from "../userLayouts.controller";
import { UserLayoutsService } from "../userLayouts.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  userId: "exampleUserId",
  createdBy: "exampleCreatedBy",
  authorisedBy: "exampleAuthorisedBy",
  createdOn: new Date(),
  authorisedOn: new Date(),
};
const CREATE_RESULT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  userId: "exampleUserId",
  createdBy: "exampleCreatedBy",
  authorisedBy: "exampleAuthorisedBy",
  createdOn: new Date(),
  authorisedOn: new Date(),
};
const FIND_MANY_RESULT = [
  {
    id: "exampleId",
    createdAt: new Date(),
    updatedAt: new Date(),
    userId: "exampleUserId",
    createdBy: "exampleCreatedBy",
    authorisedBy: "exampleAuthorisedBy",
    createdOn: new Date(),
    authorisedOn: new Date(),
  },
];
const FIND_ONE_RESULT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  userId: "exampleUserId",
  createdBy: "exampleCreatedBy",
  authorisedBy: "exampleAuthorisedBy",
  createdOn: new Date(),
  authorisedOn: new Date(),
};

const service = {
  createUserLayouts() {
    return CREATE_RESULT;
  },
  userLayoutsItems: () => FIND_MANY_RESULT,
  userLayouts: ({ where }: { where: { id: string } }) => {
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

describe("UserLayouts", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: UserLayoutsService,
          useValue: service,
        },
      ],
      controllers: [UserLayoutsController],
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

  test("POST /userLayouts", async () => {
    await request(app.getHttpServer())
      .post("/userLayouts")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        createdOn: CREATE_RESULT.createdOn.toISOString(),
        authorisedOn: CREATE_RESULT.authorisedOn.toISOString(),
      });
  });

  test("GET /userLayouts", async () => {
    await request(app.getHttpServer())
      .get("/userLayouts")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
          createdOn: FIND_MANY_RESULT[0].createdOn.toISOString(),
          authorisedOn: FIND_MANY_RESULT[0].authorisedOn.toISOString(),
        },
      ]);
  });

  test("GET /userLayouts/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/userLayouts"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /userLayouts/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/userLayouts"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
        createdOn: FIND_ONE_RESULT.createdOn.toISOString(),
        authorisedOn: FIND_ONE_RESULT.authorisedOn.toISOString(),
      });
  });

  test("POST /userLayouts existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/userLayouts")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        createdOn: CREATE_RESULT.createdOn.toISOString(),
        authorisedOn: CREATE_RESULT.authorisedOn.toISOString(),
      })
      .then(function () {
        agent
          .post("/userLayouts")
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
