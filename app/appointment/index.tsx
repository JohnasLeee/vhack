import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  Button,
} from "react-native";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useState } from "react";
import { GestureHandlerRootView, TextInput } from "react-native-gesture-handler";
import { Picker } from "@react-native-picker/picker";

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
      className="m-2 p-4 rounded-lg shadow-lg flex flex-row"
      style={{ backgroundColor: "#E1E3Ef" }}
    >
      <Image
        className="h-24 w-24 rounded-lg"
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
  const [searchTerm, setSearchTerm] = useState('');
  const [isDoctorClicked, setIsDoctorClicked] = useState({
    doctor: -1,
    book: false,
  });
  const doctors = [
    {
      id: 0,
      name: "Dr. Crendan Bhoo",
      specialty: "Cardiologist",
      picture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLF4PqJxXw4wKiZ_xaY4zg6NAcpgAgIO4uag&s",
      roomNo: 609,
      contactNumber: "+1 234 567 890",
      email: "crendan@hospital.com",
      officeHours: "Monday - Friday: 9:00 AM - 5:00 PM",
      degrees: ["MD", "FACC", "Cardiology Fellow"],
      biography:
        "Dr. Crendan Bhoo is a highly experienced cardiologist with expertise in diagnosing and treating cardiovascular diseases. He has been practicing for over 15 years and is known for his patient-centered approach and dedication to improving heart health.",
      certifications: [
        "Board Certified in Cardiology",
        "Certified in Advanced Cardiac Life Support (ACLS)",
        "Certified in Echocardiography",
      ],
      appointmentAvailability: {
        monday: "9:00 AM - 5:00 PM",
        tuesday: "9:00 AM - 5:00 PM",
        wednesday: "9:00 AM - 5:00 PM",
        thursday: "9:00 AM - 5:00 PM",
        friday: "9:00 AM - 5:00 PM",
        saturday: "Closed",
        sunday: "Closed",
      },
    },
    {
      id: 1,
      name: "Dr. Yee Ling Shen",
      specialty: "Dermatologist",
      picture:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgWFm9gYHhhhLtKgQQCWigWE3JrszddFG4g8xxOZhHSOgmyKZqUwaRGI3_zWLDgjk_XbR8GR_Bxjk4-2wMBWCAFP64v7ab7h2iUEV4gHA5-TvMSoBnERud0vXVmLn2wFVQvjkYFurnEdDE/s640/E7_4.jpg",
      roomNo: 410,
      contactNumber: "+1 234 567 891",
      email: "dr.yee.shen@hospital.com",
      officeHours:
        "Monday - Thursday: 8:30 AM - 4:30 PM, Friday: 8:30 AM - 12:00 PM",
      degrees: ["MD", "Board-Certified Dermatologist"],
      biography:
        "Dr. Yee Ling Shen specializes in the treatment of various skin conditions, including acne, eczema, and skin cancer. With over 10 years of experience, Dr. Shen is dedicated to providing individualized skincare treatments for her patients.",
      certifications: [
        "Board Certified in Dermatology",
        "Licensed in Cosmetic Dermatology",
        "Certified in Mohs Surgery",
      ],
      appointmentAvailability: {
        monday: "8:30 AM - 4:30 PM",
        tuesday: "8:30 AM - 4:30 PM",
        wednesday: "8:30 AM - 4:30 PM",
        thursday: "8:30 AM - 4:30 PM",
        friday: "8:30 AM - 12:00 PM",
        saturday: "Closed",
        sunday: "Closed",
      },
    },
    {
      id: 2,
      name: "Dr. You Shung Ungng",
      specialty: "Neurologist",
      picture:
        "https://static.wikia.nocookie.net/fe820b3f-45b0-420b-b1ee-7d037e981e7c/scale-to-width/755",
      roomNo: 314,
      contactNumber: "+1 234 567 892",
      email: "dr.you.shung.ungng@hospital.com",
      officeHours: "Monday - Friday: 9:00 AM - 5:00 PM",
      degrees: ["MD", "Neurology Specialist", "PhD in Neuroscience"],
      biography:
        "Dr. You Shung Ungng is a skilled neurologist with expertise in treating complex neurological conditions like epilepsy, migraines, and neurodegenerative diseases. He is passionate about advancing neurological research and improving the quality of life for his patients.",
      certifications: [
        "Board Certified in Neurology",
        "Certified in Epilepsy Management",
        "Certified in Neuroimaging",
      ],
      appointmentAvailability: {
        monday: "9:00 AM - 5:00 PM",
        tuesday: "9:00 AM - 5:00 PM",
        wednesday: "9:00 AM - 5:00 PM",
        thursday: "9:00 AM - 5:00 PM",
        friday: "9:00 AM - 5:00 PM",
        saturday: "Closed",
        sunday: "Closed",
      },
    },
    {
      id: 3,
      name: "Dr. Ts Pmo Icl",
      specialty: "Neurologist",
      picture:
        "https://static.wikia.nocookie.net/fe820b3f-45b0-420b-b1ee-7d037e981e7c/scale-to-width/755",
      roomNo: 412,
      contactNumber: "+1 234 567 893",
      email: "dr.ts.pmo.icl@hospital.com",
      officeHours: "Monday - Friday: 10:00 AM - 6:00 PM",
      degrees: ["MD", "Neurology Specialist", "Clinical Research Fellow"],
      biography:
        "Dr. Ts Pmo Icl is a renowned neurologist specializing in stroke management and rehabilitation. With extensive research experience in neurology, Dr. Icl works with cutting-edge therapies to improve recovery and prevent recurrence in stroke patients.",
      certifications: [
        "Board Certified in Neurology",
        "Certified in Stroke Care",
        "Advanced Training in Neurorehabilitation",
      ],
      appointmentAvailability: {
        monday: "10:00 AM - 6:00 PM",
        tuesday: "10:00 AM - 6:00 PM",
        wednesday: "10:00 AM - 6:00 PM",
        thursday: "10:00 AM - 6:00 PM",
        friday: "10:00 AM - 6:00 PM",
        saturday: "Closed",
        sunday: "Closed",
      },
    },
  ];


  const filteredDoctors = doctors.filter(doctor =>
    doctor.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <ScrollView className="p-0 ">

      {isDoctorClicked.book ? (
        <View className="p-4">
          <DoctorCard
            key={doctors[isDoctorClicked.doctor].id}
            name={doctors[isDoctorClicked.doctor].name}
            specialty={doctors[isDoctorClicked.doctor].specialty}
            picture={doctors[isDoctorClicked.doctor].picture}
            onPress={() => 1 + 1}
          />
          <View
            style={{
               padding: "1rem",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Text>
              You’re about to have a tele-consultation with
              {doctors[isDoctorClicked.doctor].name}. Get ready to be touched.
            </Text>
          </View>
          <View>
          <View>
            <Text style={{ paddingBottom: "1rem" }}>Date</Text>
            <GestureHandlerRootView>
            <View className="">
              <TextInput
                type="date"
                className="border border-gray-300 text-sm rounded-lg p-4 drop-shadow-md"
                aria-label="Select date"

              />
            </View>
            </GestureHandlerRootView>
          </View>

          <View>
      <Text style={{ paddingBottom: 16, paddingTop: 16 }}>Time</Text>
      <View>
        <Picker
          selectedValue="10 AM"
           className="border border-gray-300 text-sm rounded-lg p-4 drop-shadow-md "
          onValueChange={(itemValue) => console.log(itemValue)}
        >
          {Array.from({ length: 8 }, (_, index) => {
            const hour = 10 + index;
            const formattedTime = `${hour % 12 || 12} ${hour < 12 ? "AM" : "PM"}`;
            return (
              <Picker.Item key={hour} label={formattedTime} value={formattedTime} />
            );
          })}
        </Picker>
      </View>
    </View>
          </View>
          <View className="justify-center items-center p-4">
            <View className="h-16 w-24 rounded-lg">
              <Button
                title="Book"
                onPress={() =>
                  setIsDoctorClicked({
                    doctor: -1,
                    book: false,
                  })
                }
              />
            </View>
          </View>
        </View>
      ) : isDoctorClicked.doctor === -1 ? (
        <View>
 <View className="p-4">
      <Text>Select a Doctor</Text>
    </View>
    <View className="p-4">
    <GestureHandlerRootView>
      <TextInput
        className="border border-gray-300 text-sm rounded-lg p-4 drop-shadow-md"
        aria-label="Search doctor"
        type="text"
                id="doctorNames"
                name="doctorNames"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} // Update search term on change
        placeholder="Search for a doctor"
      />
       </GestureHandlerRootView>
    </View>
    <View className="p-2">
      {(filteredDoctors.length > 0 || searchTerm == "" )? (
        filteredDoctors.map((doctor) => (
          <DoctorCard
            key={doctor.id}
            name={doctor.name}
            specialty={doctor.specialty}
            picture={doctor.picture}
            onPress={() =>
              setIsDoctorClicked({ doctor: doctor.id, book: false })
            }
          />
        ))
      ) : (
        <Text>No doctors found</Text>
      )}
    </View>
        </View>
      ) : (
        <View>
          <View className="p-2">
            <TouchableOpacity
              onPress={() => setIsDoctorClicked({ doctor: -1, book: false })}
            >
              <Text>
              Back</Text>
            </TouchableOpacity>
          </View>
          <View className="p-4">
            <View>
              <Text>{doctors[isDoctorClicked.doctor].name}</Text>
            </View>
            <View
              className="m-2 p-4 rounded-lg shadow-lg flex flex-row"
              style={{ backgroundColor: "#E1E3Ef" }}
            >
              <View>
                <Image
                  className="h-24 w-24 rounded-lg"
                  source={{ uri: doctors[isDoctorClicked.doctor].picture }}
                />
              </View>
              <View style={{  paddingLeft: "1rem" }}>
                <Text> Email: {doctors[isDoctorClicked.doctor].email}</Text>
                <Text>Tel: {doctors[isDoctorClicked.doctor].contactNumber}</Text>
                <Text>Room: {doctors[isDoctorClicked.doctor].roomNo}</Text>
              </View>
            </View>
            <View style={{ paddingTop: "1rem" }}>
              <Text style={{  fontWeight: "bold" }}>
                Biography
              </Text>
              <Text>{doctors[isDoctorClicked.doctor].biography}</Text>
            </View>
            <View className="pt-4">
              {Object.entries(
                doctors[isDoctorClicked.doctor].appointmentAvailability
              ).map(([day, time]) => (
                <View className="flex flex-row ">
                <Text className="font-bold" key={day}>
                 {day.charAt(0).toUpperCase() + day.slice(1)} : 
                </Text>
                <Text className="pl-1">{time}</Text></View>
              ))}
            </View>
          </View>
          <View className="justify-center items-center">
            <View className="h-16 w-24 rounded-lg">
              <Button
                title="Select Doctor"
                onPress={() =>
                  setIsDoctorClicked({
                    doctor: isDoctorClicked.doctor,
                    book: true,
                  })
                }
              />
            </View>
          </View>
        </View>
      )}
    </ScrollView>
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