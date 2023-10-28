'use client'

import { Template, ImageCard, Button, InputText, useNotification, AuthenticatedPage } from '@/components'
import { Image } from '@/resources/image/image.resource';
import { useImageService } from '@/resources'
import { useState } from 'react'

import Link from 'next/link';

export default function GaleriaPage(){

    const useService = useImageService();
    const notification = useNotification();
    const [images, setImages] = useState<Image[]>([])
    const [query, setQuery] = useState<string>('')
    const [extension, setExtension] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)

    async function searchImages(){
        setLoading(true)
        const result = await useService.buscar(query, extension);
        setImages(result);
        setLoading(false);

        if(!result.length){
            notification.notify('No results found!', 'warning');
        }
    }

    function renderImageCard(image: Image) {
        return (
            <ImageCard key={image.url} 
                       nome={image.name} 
                       src={image.url} 
                       tamanho={image.size}
                       extension={image.extension}
                       dataUpload={image.uploadDate}  />
        )
    }

    function renderImageCards(){
        return images.map(renderImageCard)
    }
    
    return (
        <AuthenticatedPage>
            <Template loading={loading}>            
                <section className="flex flex-col items-center justify-center my-5">
                    <div className="flex space-x-4">
                        <InputText placeholder='Type Name or Tags' onChange={event => setQuery(event.target.value)}/>
                        <select onChange={event => setExtension(event.target.value)} 
                                className="border px-4 py-2 rounded-lg text-gray-900">
                            <option value="">All formats</option>
                            <option value="PNG">PNG</option>
                            <option value="JPEG">JPEG</option>
                            <option value="GIF">GIF</option>
                        </select>
                        
                        <Button style='bg-blue-500 hover:bg-blue-300' label='Search' onClick={searchImages}/>

                        <Link href="/formulario">
                            <Button style='bg-yellow-500 hover:bg-yellow-300' label='Add New' />
                        </Link>
                    </div>
                </section>

                <section className="grid grid-cols-4 gap-8">
                    {
                        renderImageCards()
                    }                     
                </section>
            </Template>
        </AuthenticatedPage>
    )
}