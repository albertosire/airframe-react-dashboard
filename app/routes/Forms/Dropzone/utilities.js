export const typeToIcon = type => {
    const map = {
        ['application/msword']: 'file-word-o',
        ['application/excel']: 'file-excel-o',
        ['application/vnd.oasis.opendocument.spreadsheet']: 'file-excel-o',
        ['application/vnd.oasis.opendocument.presentation']: 'file-powerpoint-o',
        ['application/mspowerpoint']: 'file-powerpoint-o',
        ['application/x-zip-compressed']: 'file-archive-o',
        ['image/jpeg']: 'file-image-o',
        ['image/png']: 'file-image-o',
        ['audio/mp3']: 'file-audio-o',
        ['text/plain']: 'file-text-o'
    }
    return map[type] || null;
}

export const extToIcon = filename => {
    const map = {
        ['doc']: 'file-word-o',
        ['docx']: 'file-word-o',
        ['xls']: 'file-excel-o',
        ['xlsx']: 'file-excel-o',
        ['ppt']: 'file-powerpoint-o',
        ['pdf']: 'file-pdf-o'
    }

    return map[filename.split('.').pop()] || null;
}

export const getFileIcon = file => {
    return typeToIcon(file.type) || extToIcon(file.name) || 'file-o';
}