import * as graphql from "@nestjs/graphql";
import { PendingUserLayoutsResolverBase } from "./base/pendingUserLayouts.resolver.base";
import { PendingUserLayouts } from "./base/PendingUserLayouts";
import { PendingUserLayoutsService } from "./pendingUserLayouts.service";

@graphql.Resolver(() => PendingUserLayouts)
export class PendingUserLayoutsResolver extends PendingUserLayoutsResolverBase {
  constructor(protected readonly service: PendingUserLayoutsService) {
    super(service);
  }
}
