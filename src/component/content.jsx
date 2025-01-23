import baffle from 'baffle'
import { useEffect } from 'react'
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
            <div className="title text-lg font-header text-7xl text-gradient max-sm:text-4xl ">
                <h1>
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

const SkillsSection = () => {
    return(
        <Section className="skills">
             <div className='flex w-full h-10 items-center'>
                <div className='w-20 h-2 mt-2 bg-pink-400'>
                </div>
                <h2 className='text-3xl text-white font-bold ml-2'>Skill</h2>
            </div>
        <div className="skill-card w-1/4 rounded text-black p-5 font-body mt-5 max-sm:w-9/12 max-lg:w-5/12">
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
        </div>
        </Section>
    )
}

const Projects = [
    {
        name: "Sistem Informasi Manajemen Ruangan",
        img: ["project_1_1.png", "project_1_2.png", "project_1_3.png", "project_1_4.png"],
        description: "Web application ini dibuat dengan framework Laravel, PHP, HTML, CSS, Javascript, Bootstrap, MySql, Spatie, dan Datatables"
    },
    {
        name: "Sistem Presensi Dengan Face Recognition Dan QR Scanner",
        img: ["project_2_1.jpg", "project_2_2.jpg", "project_2_3.png", "project_2_4.png", "project_2_5.png"],
        description: "Web application dibuat dengan menggunakan framework Codeigniter 4, Bootstrap, MySql, HTML, CSS, Javascript, MythAuth, Endroid, Instascan, Face-API, Dompdf"
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
                                <div className="box w-44 h-5/6 hover:w-4/5 max-sm:mb-5 max-sm:w-9/12 max-sm:text-xs max-sm:hover:w-10/12 max-lg:mb-5 max-lg:w-10/12 max-lg:hover:w-10/12" key={index}>
                                <div className="title_box absolute z-30 w-fit h-full content-end z-40">
                                    <div className="detail m-5">
                                        <h1 className='font-bold'>{item.name}</h1>
                                        <hr/>
                                        <p>{item.description}</p>
                                    </div>
                                    </div>
                                    
            
                                        <div class="h-full w-full " data-carousel="slide">
                                            
                                            <div class="relative h-full overflow-hidden">

                                                    {
                                                        item.img.map((pic) => {
                                                            return(
                                                            <div class="hidden duration-700 ease-in-out" data-carousel-item>
                                                                <img src={`./projects_pic/${pic}`} className="absolute w-full h-full z-0 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
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