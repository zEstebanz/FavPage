"use client"
import React, { useState } from 'react';
import imgDevDoc from '../../public/img/devcod.jpg';
import imgVsCode from '../../public/img/vscode.jpg';
import imgPublicApis from '../../public/img/public-apis.jpg';
import imgColorMagic from '../../public/img/color-magic.jpg';
import imgCarbon from '../../public/img/cabon.jpg';
import imgVsCodeTheme from '../../public/img/vscode-theme.jpg';
import imgGalileoAi from '../../public/img/GalileoAi.jpg';
import imgGitHubProfileGenerator from '../../public/img/GitHub Profile README Generator.jpg';
import imgGitHubCertifications from '../../public/img/github-certifications.jpg';
import imgDeveloperRoadmaps from '../../public/img/Developer Roadmaps.jpg';
import imgFullStackOpen from '../../public/img/FullStackOpen.png';
import imgDevLibrary from '../../public/img/devlibrary.jpg';

import Image from 'next/image';
import Link from 'next/link';

function CardPage() {
    const [filter, setFilter] = useState('all'); // Estado para almacenar el filtro seleccionado
    const [searchTerm, setSearchTerm] = useState(''); // Estado para almacenar el término de búsqueda

    const pages = [
        {
            title: 'Dev Docs',
            category: 'doc',
            url: 'https://devdocs.io/',
            imagen: imgDevDoc
        },
        {
            title: 'Visual Code',
            category: 'tool',
            url: 'https://vscode.dev/',
            imagen: imgVsCode
        },
        {
            title: 'Public Apis',
            category: 'web',
            url: 'https://publicapis.dev/',
            imagen: imgPublicApis
        },
        {
            title: 'Color Magic',
            category: 'web',
            url: 'https://colormagic.app/',
            imagen: imgColorMagic
        },
        {
            title: 'Carbon',
            category: 'web',
            url: 'https://carbon.now.sh/',
            imagen: imgCarbon
        },
        {
            title: 'VS Code Theme',
            category: 'web',
            url: 'https://vscodethemes.com/',
            imagen: imgVsCodeTheme
        },
        {
            title: 'GitHub Certifications',
            category: 'web',
            url: 'https://resources.github.com/learn/certifications/',
            imagen: imgGitHubCertifications
        },
        {
            title: 'Galileo Ai',
            category: 'ia',
            url: 'https://www.usegalileo.ai/explore',
            imagen: imgGalileoAi
        },
        {
            title: 'GitHub Profile README Generator',
            category: 'tool',
            url: 'https://rahuldkjain.github.io/gh-profile-readme-generator/',
            imagen: imgGitHubProfileGenerator
        },
        {
            title: 'Developer Roadmaps',
            category: 'doc',
            url: 'https://roadmap.sh/',
            imagen: imgDeveloperRoadmaps
        },
        {
            title: 'Dev Library',
            category: 'doc',
            url: 'https://devlibrary.withgoogle.com/',
            imagen: imgDevLibrary
        },
        {
            title: 'Full Stack Open',
            category: 'web',
            url: 'https://fullstackopen.com/es/',
            img: imgFullStackOpen
        }
    ];

    // Función para filtrar las páginas según la categoría seleccionada
    const filteredPages = filter === 'all' ? pages : pages.filter(page => page.category === filter);

    // Función para filtrar las páginas por término de búsqueda
    const filteredSearchPages = filteredPages.filter(page =>
        page.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <section className="p-8 pt-10 pb-[150px] bg-white dark:bg-black min-h-screen h-auto">
            <div className="container mx-auto">
                {/* Barra de búsqueda */}
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Buscar páginas por título"
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-600 rounded-md focus:outline-none focus:border-[#30b388] dark:bg-gray-800 dark:text-white"
                    />
                </div>

                {/* Botones de filtrado */}
                <div className="flex flex-wrap justify-center mb-4">
                    <button className={`mr-2 mb-2 px-4 py-2 rounded ${filter === 'all' ? 'bg-[#30b388] hover:bg-[#217e5f] transition duration-300 text-white' : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white'}`} onClick={() => setFilter('all')}>Todos</button>
                    <button className={`mr-2 mb-2 px-4 py-2 rounded ${filter === 'web' ? 'bg-[#30b388] hover:bg-[#217e5f] transition duration-300 text-white' : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white'}`} onClick={() => setFilter('web')}>Web</button>
                    <button className={`mr-2 mb-2 px-4 py-2 rounded ${filter === 'doc' ? 'bg-[#30b388] hover:bg-[#217e5f] transition duration-300 text-white' : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white'}`} onClick={() => setFilter('doc')}>Documentación</button>
                    <button className={`mr-2 mb-2 px-4 py-2 rounded ${filter === 'tool' ? 'bg-[#30b388] hover:bg-[#217e5f] transition duration-300 text-white' : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white'}`} onClick={() => setFilter('tool')}>Herramientas</button>
                    <button className={`mr-2 mb-2 px-4 py-2 rounded ${filter === 'ia' ? 'bg-[#30b388] hover:bg-[#217e5f] transition duration-300 text-white' : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white'}`} onClick={() => setFilter('ia')}>IA</button>
                </div>

                {/* Tarjetas de páginas filtradas por término de búsqueda */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
                    {filteredSearchPages.map((page, index) => (
                        <div key={index} className="rounded-lg overflow-hidden bg-white dark:bg-gray-700 shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                            <Link
                                href={page.url} // Usar la URL directamente en la etiqueta "a"
                                className="block"
                                target="_blank" // Abrir enlace en una nueva pestaña
                                rel="noopener noreferrer" // Añadir atributos de seguridad
                            >
                                <Image
                                    src={page.imagen}
                                    className="w-full h-48 object-contain"
                                    alt={page.title}
                                />
                            </Link>
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">{page.title}</h3>
                                <Link
                                    href={page.url} // Usar la URL directamente en la etiqueta "a"
                                    className="inline-block bg-[#30b388] hover:bg-[#217e5f] text-white py-2 px-4 rounded transition duration-300 ease-in-out"
                                    target="_blank" // Abrir enlace en una nueva pestaña
                                    rel="noopener noreferrer" // Añadir atributos de seguridad
                                >
                                    Visitar
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default CardPage;
