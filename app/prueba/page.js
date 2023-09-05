import  fs from 'fs';
import  path from  'path';

function getImagesFromFolder(folderPath) {
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif']; // Extensiones de archivos de imagen

    function isImageFile(fileName) {
        const ext = path.extname(fileName).toLowerCase();
        return imageExtensions.includes(ext);
    }

    function getImagesRecursively(directory) {
        let imagePaths = [];

        const items = fs.readdirSync(directory);

        items.forEach(item => {
            const itemPath = path.join(directory, item);
            const isDir = fs.statSync(itemPath).isDirectory();

            if (isDir) {
                const subImages = getImagesRecursively(itemPath);
                imagePaths = imagePaths.concat(subImages);
            } else if (isImageFile(item)) {
                imagePaths.push(itemPath);
            }
        });

        return imagePaths;
    }

    return getImagesRecursively(folderPath);
}

const publicFolderPath = "./public"||'/galeria'; // Ruta a la carpeta 'public'
const imagePaths = getImagesFromFolder(publicFolderPath);

export default function page(){
    return<>
    {imagePaths.map((imagePath, index) => <p key={index}>{imagePath}</p>)}
    </>
}
