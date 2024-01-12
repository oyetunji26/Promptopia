import { connectToDb } from '@utils/database'
import Prompt from '@models/prompt';

export const POST = async (req) => {

    // extact all the data from the request
    const {userId,prompt,tag} = await req.json();

    // try: to do sth to d data
    try {

        // awaiting conection to the database, we have to connect every time because
        // it is a lambda function, it would die after each use
        await connectToDb();

        // create a new model, if it doesnt exist before, it is like a class
        // has a scheme of creator i.e the profileid from the auth,tag and prompt
        const newPrompt = new Prompt({
            creator: userId,
            prompt,
            tag
        })

        // after creating a new prompt, save it to the database
        await newPrompt.save();

        // google this, i think its a fetch api response, it is inbuilt, you can specify what to return and its status code thereafter
        return new Response(JSON.stringify(newPrompt), {status: 201})
    }
    catch (error) {
        return new Response('Failed to create a new prompt.',{status: 500})
    }
}