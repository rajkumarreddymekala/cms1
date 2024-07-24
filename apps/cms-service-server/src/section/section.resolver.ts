import * as graphql from "@nestjs/graphql";
import { SectionResolverBase } from "./base/section.resolver.base";
import { Section } from "./base/Section";
import { SectionService } from "./section.service";

@graphql.Resolver(() => Section)
export class SectionResolver extends SectionResolverBase {
  constructor(protected readonly service: SectionService) {
    super(service);
  }
}
