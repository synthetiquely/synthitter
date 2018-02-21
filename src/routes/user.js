import KoaRouter from 'koa-router';
import { upload } from '../config/middlewares';
import { uploadUserAvatar } from '../controllers/user';

const router = new KoaRouter();

router.post('/image/upload', upload.single('file'), uploadUserAvatar);

export default router;
