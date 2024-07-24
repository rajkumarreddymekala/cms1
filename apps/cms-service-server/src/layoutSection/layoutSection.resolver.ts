import * as graphql from "@nestjs/graphql";
import { LayoutSectionResolverBase } from "./base/layoutSection.resolver.base";
import { LayoutSection } from "./base/LayoutSection";
import { LayoutSectionService } from "./layoutSection.service";

@graphql.Resolver(() => LayoutSection)
export class LayoutSectionResolver extends LayoutSectionResolverBase {
  constructor(protected readonly service: LayoutSectionService) {
    super(service);
  }
}
