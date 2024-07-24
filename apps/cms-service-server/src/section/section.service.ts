import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SectionServiceBase } from "./base/section.service.base";

@Injectable()
export class SectionService extends SectionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
