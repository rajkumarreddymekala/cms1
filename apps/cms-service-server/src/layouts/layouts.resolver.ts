import * as graphql from "@nestjs/graphql";
import { LayoutsResolverBase } from "./base/layouts.resolver.base";
import { Layouts } from "./base/Layouts";
import { LayoutsService } from "./layouts.service";

@graphql.Resolver(() => Layouts)
export class LayoutsResolver extends LayoutsResolverBase {
  constructor(protected readonly service: LayoutsService) {
    super(service);
  }
}
