import { ImageBackground } from "react-native";

const BackGround = ({ children }) => {
  return (
    <ImageBackground source={require('../img/bg.png')} resizeMode="cover" className='h-full'>
      {children}
    </ImageBackground>
  ); 
};

export default BackGround