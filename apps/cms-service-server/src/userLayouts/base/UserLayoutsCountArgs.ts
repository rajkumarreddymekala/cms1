/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { UserLayoutsWhereInput } from "./UserLayoutsWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class UserLayoutsCountArgs {
  @ApiProperty({
    required: false,
    type: () => UserLayoutsWhereInput,
  })
  @Field(() => UserLayoutsWhereInput, { nullable: true })
  @Type(() => UserLayoutsWhereInput)
  where?: UserLayoutsWhereInput;
}

export { UserLayoutsCountArgs as UserLayoutsCountArgs };
