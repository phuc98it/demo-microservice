import { AbstractDocument } from "@app/common";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Exclude, instanceToPlain } from "class-transformer";

@Schema()
export class UserDocument extends AbstractDocument {
    @Prop()
    email: string;

    @Prop()
    @Exclude()
    password: string;
}

export const UserSchema = SchemaFactory.createForClass(UserDocument);