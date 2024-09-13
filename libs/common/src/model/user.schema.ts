import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Exclude } from "class-transformer";
import { AbstractDocument } from "../database";

@Schema()
export class UserDocument extends AbstractDocument {
    @Prop()
    email: string;

    @Prop()
    @Exclude()
    password: string;
}

export const UserSchema = SchemaFactory.createForClass(UserDocument);