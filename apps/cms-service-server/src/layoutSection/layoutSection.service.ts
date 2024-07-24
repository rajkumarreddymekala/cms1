import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LayoutSectionServiceBase } from "./base/layoutSection.service.base";

@Injectable()
export class LayoutSectionService extends LayoutSectionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
