import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LayoutsServiceBase } from "./base/layouts.service.base";

@Injectable()
export class LayoutsService extends LayoutsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
