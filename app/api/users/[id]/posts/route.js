import { connectToDb } from "@utils/database";
import Prompt from '@models/prompt';

export const GET = async (request, {params}) => {
    try {
        await connectToDb();

        // research on populate fors mongoose
        const prompts = await Prompt.find({ 
            creator: params.id
        }).populate('creator');

        return new Response(JSON.stringify(prompts), {status: 200});
    } catch (error) {
        return new Response('Failed to fetch all prompts', {status: 500});
    }
}