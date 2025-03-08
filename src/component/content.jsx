import { motion } from "motion/react"

const Section = (props) => {
    const {children} = props
    return( 
        <motion.section
            className={`${props.className} w-screen h-screen flex flex-col item-start justify-center ml-5`} 
            initial={{
                opacity:0,
                y: 100
            }}
            whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                    duration: 1,
                    delay: 0.5
                }
            }}
            >
                {children}
        </motion.section>
     )
}

const Title  = () => {
    
    // useEffect(() => {
    //     const title = baffle(".title")
    //     title.set({
    //         characters: "abcdefghijklmnopqrstuvwxyz",
    //         speed: 75
    //     })
    //     title.start()
    //     title.reveal(1000,1000)
    // })
    return(
        <Section className="intro">
            <div className="title text-lg font-header">
                <h1 className='text-8xl text-gradient max-sm:text-4xl'>
                    Hello, I'am Dio
                </h1>
            </div>
        </Section>
    )
}

const skills = [
    {
        name: "React",
        level: 70
    },
    {
        name: "Javascript",
        level: 70
    },
    {
        name: "Python",
        level: 80
    },
    {
        name: "PHP",
        level: 70
    },
    {
        name: "Laravel",
        level: 80
    },
    {
        name: "Codeingter",
        level: 50
    },

]
const language = [
    {
        name: "Indonesia",
        level: 100
    },
    {
        name: "English",
        level: 60
    }
] 

const SkillsSection = () => {
    return(
        <Section className="skills">
             <div className='flex w-full h-10 items-center'>
                <div className='w-20 h-2 mt-2 bg-pink-400'>
                </div>
                <h2 className='text-3xl text-white font-bold ml-2'>Skill</h2>
            </div>
        <div className="skill-card w-1/4 rounded text-black p-5 font-body mt-5 max-sm:w-9/12 max-lg:w-5/12">
            <h2 className="mt-4 text-2xl font-bold text-white">Programing</h2>
            {
                skills.map((item, index) => {
                    return(
                        <div className='my-3' key={index}>
                            <h2 className='text-white font-bold'>{item.name}</h2>           
                            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                <motion.div className="skills-bar h-2.5 rounded-full" 
                                style={{width: `${item.level}%`}}
                                initial={{
                                    scaleX: 0,
                                    originX: 0
                                }}
                                whileInView={{
                                    scaleX: 1
                                }}
                                transition={{
                                    duration: 1,
                                    delay: 0.5
                                }}
                                >
                                </motion.div>
                            </div>
                        </div>

                    )
                })
            }
            <h2 className="mt-4 text-2xl font-bold text-white">Language</h2>
            {
                language.map((item, index) => {
                    return(
                        <div className='my-3' key={index}>
                        <h2 className='text-white font-bold'>{item.name}</h2>           
                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                            <motion.div className="skills-bar h-2.5 rounded-full" 
                            style={{width: `${item.level}%`}}
                            initial={{
                                scaleX: 0,
                                originX: 0
                            }}
                            whileInView={{
                                scaleX: 1
                            }}
                            transition={{
                                duration: 1,
                                delay: 0.5
                            }}
                            >
                            </motion.div>
                        </div>
                    </div>
                    )
                })
            }
        </div>
        </Section>
    )
}

const Projects = [
    {
        name: "Sistem Informasi Manajemen Ruangan",
        img: ["project_1_1.png", "project_1_2.png", "project_1_3.png", "project_1_4.png"],
        description: "Web application ini dibuat dengan framework Laravel, PHP, HTML, CSS, Javascript, Bootstrap, MySql, Spatie, dan Datatables",
        link: null
    },
    {
        name: "Sistem Presensi Dengan Face Recognition Dan QR Scanner",
        img: ["project_2_1.jpg", "project_2_2.jpg", "project_2_3.png", "project_2_4.png", "project_2_5.png"],
        description: "Web application dibuat dengan menggunakan framework Codeigniter 4, Bootstrap, MySql, HTML, CSS, Javascript, MythAuth, Endroid, Instascan, Face-API, Dompdf",
        link: null
    },
    {
        name: "3D Music Player",
        img: ["project_3_1.png", "project_3_2.png"],
        description: "Web application dibuat dengan menggunakan framework python flask pada bagian backend dan react, material ui, tailwind, three js, react three fiber, react three drei, axios",
        link: "https://dioandrew.github.io/3d-music-player/"
    }
]

// const ProjectsSection = () => {
//     return(
//             <Section className="projects2">
//                 <div className='container flex items-center mt-5 max-w-6xl'>
//                 {
//                     Projects.map((item) => {
//                         return(
//                             <div className="project-card ml-5 p-5 w-fit rounded-lg">
//                                 <h5 class="m-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//                                     {item.name}
//                                 </h5>
//                                 <div className='card-detail'>
//                                     <img className='object-fill h-48 w-96' src={`./${item.img}`} alt="" />
//                                     <p>
//                                         {item.description}
//                                     </p>
//                                 </div>
//                             </div>           
//                         )
//                     })
//                 }
//                 </div>
//             </Section>

//     )
// }

const ProjectsSection = () => {
    return(
        <Section className="projects mt-48 mb-20">
            <div className='flex w-full h-10 items-center'>
                <div className='w-20 h-2 mt-2 bg-pink-400'>
                </div>
                <h2 className='text-3xl text-white font-bold ml-2'>Project</h2>
            </div>
            <div className='flex max-w-6xl h-full mt-5 content-center max-sm:flex-col max-lg:flex-col'>
            
                {
                    Projects.map((item, index) => {
                        return(
                                <div className="box mr-3 w-44 h-5/6 rounded-display hover:w-4/5 hover:rounded-md max-sm:mb-5 max-sm:w-9/12 max-sm:text-xs max-sm:hover:w-10/12 max-lg:mb-5 max-lg:w-10/12 max-lg:hover:w-10/12" key={index}>
                                    <div className="title_box rounded-inherit absolute z-30 w-full h-full content-end z-40">
                                        <div className="detail m-5">
                                            <div className="flex flex-row">
                                                <h1 className='font-bold'>{item.name}</h1>
                                                {
                                                    item.link && <a href={item.link} target="_blank" rel="noopener noreferrer">
                                                                    <button type="button" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-3 mx-2 text-center me-2 mb-2">
                                                                        Visit
                                                                    </button>
                                                                </a>
                                                }
                                            </div>
                                            <hr/>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>  
                                                
                                    <div className="relative h-full rounded-inherit overflow-hidden" data-carousel="slide">
                                            {
                                                item.img.map((pic) => {
                                                    return(
                                                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                                        <img src={`./projects_pic/${pic}`} className="w-full h-full object-fill" alt={item.name} />
                                                    </div>
                                                    )
                                                    })
                                            }
                                                    <button type="button" className="absolute btn-prev top-0 start-0 flex z-50 items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                                                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                                            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                                                            </svg>
                                                            <span className="sr-only">Previous</span>
                                                        </span>
                                                    </button>
                                                    <button type="button" className="absolute btn-next top-0 end-0 flex z-50 items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                                                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                                            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                                                            </svg>
                                                            <span className="sr-only">Next</span>
                                                        </span>
                                                    </button>
                                    </div>
                                </div>
                        )
                    })
                }


            </div>
        </Section>
    )
}


function Content(){
    return(
        <>
            <Title />
            <SkillsSection />
            <ProjectsSection/>

        </>
    )
}

export default Content