import * as mongoose from 'mongoose'

export const PageSchema = new mongoose.Schema({
  url: { type: String, required: true },
  register_count: { type: Number, required: true },
});
export interface Page {
  id: string;
  url: string;
  register_count: number;
}