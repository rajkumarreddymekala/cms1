import * as graphql from "@nestjs/graphql";
import { UserLayoutsResolverBase } from "./base/userLayouts.resolver.base";
import { UserLayouts } from "./base/UserLayouts";
import { UserLayoutsService } from "./userLayouts.service";

@graphql.Resolver(() => UserLayouts)
export class UserLayoutsResolver extends UserLayoutsResolverBase {
  constructor(protected readonly service: UserLayoutsService) {
    super(service);
  }
}
