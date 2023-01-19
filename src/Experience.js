import { Text, ContactShadows, PresentationControls, Float, Environment, useGLTF, Html } from '@react-three/drei'
import { useControls } from 'leva';
import { Model } from './model';

export default function Experience()
{
    const computer = useGLTF('./screensfix.glb')
    console.log(computer); 
    const {position,rotation} = useControls({
        position: {value:{x:0,y:0,z:0}, step: 0.5},
        rotation: {x:0,y:0,z:0}
    })   
    return <>

        <color args={ [ '#695b5b' ] } attach="background" />

        <Environment preset="city" />
        
        <PresentationControls
            global
            rotation={ [ 0.13, 0.1, 0 ] }
            polar={ [ - 0.4, 0.2 ] }
            azimuth={ [ - 0.5, 0.5 ] }
            config={ { mass: 2, tension: 400 } }
            snap={ { mass: 4, tension: 400 } }
        >
            <Float rotationIntensity={ 0.4 } >  
                <rectAreaLight
                    width={ 2.5 }
                    height={ 1.65 }
                    intensity={ 60 }
                    color={ 'blue' }
                    rotation={ [ - 0.1, Math.PI, 0 ] }
                    position={ [ 0, 0.55, - 1.15 ] }
                />
                <primitive object={computer.nodes.Macbook} position-y={-0.7}>
                <Html
                       transform
                       wrapperClass="htmlScreen"
                       distanceFactor={ 11 }
                       position={ [ -0.1,9.9,-13.0 ] }
                       rotation-x={ - 0.256 }
                    >
                        <iframe src="https://azamportfoliosite.netlify.app" />
                    </Html>
                </primitive>
                <primitive object={computer.nodes.iphonex} position={[1.5,0.17,0]}>
                <Html
                       transform
                       wrapperClass="mobScreen"
                       distanceFactor={ 1.17 }
                       position={ [ 0.1,-0.25,0 ] }
                    >
                        <iframe src="https://azamportfoliosite.netlify.app" />
                    </Html>
                    </primitive>
                <primitive object={computer.nodes.Ipad_} position-y={-0.7}>
                <Html
                       transform
                       wrapperClass="ipadScreen"
                       distanceFactor={ 0.1 }
                       position={ [ position.x,position.y,position.z ] }
                    >
                        <iframe src="https://azamportfoliosite.netlify.app" />
                    </Html>
                    </primitive>
                    

                <Text
                    font="./bangers-v20-latin-regular.woff"
                    fontSize={ 1 }
                    position={ [ 2, 1.3, 0.75 ] }
                    rotation-y={ - 1.25 }
                    maxWidth={ 3 }
                >
                    Sikander
                </Text>
            </Float>
        </PresentationControls>

        <ContactShadows
            position-y={ - 1.4 }
            opacity={ 0.4 }
            scale={ 5 }
            blur={ 2.4 }
        />

    </>
}