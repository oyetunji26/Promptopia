import React from 'react'
import  {Schema, model, models} from 'mongoose';

// promptSchema to create a new mongoose prompt

const promptSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  prompt: {
    type: String,
    required: [true, 'Prompt is required.'],
  },
  tag: {
    type:String,
    required: [true, 'Tag is required.']
  }
});


// next line to check if theres a model called Prompt if not create i.e the || OR operator 
const Prompt = models.Prompt || model('Prompt', promptSchema);

export default Prompt