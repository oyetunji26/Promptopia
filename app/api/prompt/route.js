import { connectToDb } from '@utils/database'
import Prompt from '@models/prompt';

export const GET = async (request) => {

    try {
        await connectToDb();

        // research on populate for mongoose
        const prompts = await Prompt.find({}).populate('creator');

        return new Response(JSON.stringify(prompts), {status: 200});
    } catch (error) {
        return new Response('Failed to fetch all prompts', {status: 500});
    }
}