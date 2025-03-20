import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View,Image } from "react-native";
import "../global.css";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const DoctorCard = ({
  name,
  specialty,
  picture,
  onPress,
}: {
  name: string;
  specialty: string;
  picture: string;
  onPress: () => void;
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="m-2 p-4 rounded-lg shadow-lg flex flex-row"  style={{backgroundColor:"#E1E3Ef"}}
    >
        <Image className="h-24 w-24 " style={{borderRadius:"4px"}}
          source={{ uri: picture }} 
        />
      <View className="p-2">
      <Text className="font-medium text-lg p-2">{name}</Text>
      <Text className="text-gray-600 p-2">{specialty}</Text>
      </View>
    </TouchableOpacity>
  );
};

const NavItem = ({
  icon,
  text,
  onPress,
}: {
  icon: JSX.Element;
  text: string;
  onPress: () => void;
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex-1 items-center text-center gap-2"
    >
      <View className="bg-white rounded-full flex justify-center items-center w-24 h-24">
        {icon}
      </View>
      <Text className="text-white text-center">{text}</Text>
    </TouchableOpacity>
  );
};

export default function App() {
  const doctors = [
    { id: 1, name: "Dr. Crendan Bhoo", specialty: "Cardiologist", picture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLF4PqJxXw4wKiZ_xaY4zg6NAcpgAgIO4uag&s" },
    { id: 2, name: "Dr. Yee Ling Shen", specialty: "Dermatologist" , picture:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgWFm9gYHhhhLtKgQQCWigWE3JrszddFG4g8xxOZhHSOgmyKZqUwaRGI3_zWLDgjk_XbR8GR_Bxjk4-2wMBWCAFP64v7ab7h2iUEV4gHA5-TvMSoBnERud0vXVmLn2wFVQvjkYFurnEdDE/s640/E7_4.jpg"},
    { id: 3, name: "Dr. You Shung Ungng", specialty: "Neurologist" , picture:"https://static.wikia.nocookie.net/fe820b3f-45b0-420b-b1ee-7d037e981e7c/scale-to-width/755"},
  ];
  return (
    <View className="p-0 flex">
      <View
        className="p-0 w-full h-24 flex justify-center text-center"
        style={{ backgroundColor: "#CAD0DE" }}
      >
        <p>Select Doctor</p>
      </View>
      <View className="p-4">
        <p>Select a Doctor </p>
      </View>
      <View className="p-4">
        <input
          className="border border-gray-300 text-sm rounded-lg p-4 drop-shadow-md "
          aria-label="lorem ipsum"
          type="text"
          id="name"
          name="name"
        ></input>
      </View>
      <View>
        <View className="p-2">
          {doctors.map((doctor) => (
            <DoctorCard
              key={doctor.id}
              name={doctor.name}
              specialty={doctor.specialty}
              picture={doctor.picture}
              onPress={() => console.log(`Selected ${doctor.name}`)} // You can replace this with navigation or other logic
            />
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    top: 0,
    left: "50%",
    transform: [{ translateX: "-50%" }],
    width: "200%",
    height: 550,
    borderBottomLeftRadius: 500,
    borderBottomRightRadius: 350,
    elevation: 15,
    zIndex: -1,
  },
});
