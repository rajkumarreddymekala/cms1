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
import { LayoutSectionController } from "../layoutSection.controller";
import { LayoutSectionService } from "../layoutSection.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  layoutVersion: 42,
  content: "exampleContent",
  orderBy: 42,
  status: "exampleStatus",
  createdBy: "exampleCreatedBy",
  authorisedBy: "exampleAuthorisedBy",
  createdOn: new Date(),
  authorisedOn: new Date(),
};
const CREATE_RESULT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  layoutVersion: 42,
  content: "exampleContent",
  orderBy: 42,
  status: "exampleStatus",
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
    layoutVersion: 42,
    content: "exampleContent",
    orderBy: 42,
    status: "exampleStatus",
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
  layoutVersion: 42,
  content: "exampleContent",
  orderBy: 42,
  status: "exampleStatus",
  createdBy: "exampleCreatedBy",
  authorisedBy: "exampleAuthorisedBy",
  createdOn: new Date(),
  authorisedOn: new Date(),
};

const service = {
  createLayoutSection() {
    return CREATE_RESULT;
  },
  layoutSections: () => FIND_MANY_RESULT,
  layoutSection: ({ where }: { where: { id: string } }) => {
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

describe("LayoutSection", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: LayoutSectionService,
          useValue: service,
        },
      ],
      controllers: [LayoutSectionController],
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

  test("POST /layoutSections", async () => {
    await request(app.getHttpServer())
      .post("/layoutSections")
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

  test("GET /layoutSections", async () => {
    await request(app.getHttpServer())
      .get("/layoutSections")
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

  test("GET /layoutSections/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/layoutSections"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /layoutSections/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/layoutSections"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
        createdOn: FIND_ONE_RESULT.createdOn.toISOString(),
        authorisedOn: FIND_ONE_RESULT.authorisedOn.toISOString(),
      });
  });

  test("POST /layoutSections existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/layoutSections")
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
          .post("/layoutSections")
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
