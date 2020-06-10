import axios from 'axios';

export class ImageService {
    static async getImage(seed: string): Promise<string> {
        const response = await axios.get(`https://picsum.photos/seed/${seed}/100/100`);
        return response.request.responseURL;
    }
}