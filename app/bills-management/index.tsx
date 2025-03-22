import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import { useState } from "react";

type Payment = {
  id: string;
  doctorName: string;
  hospitalName: string;
  department: string;
  amount: number;
  date: string;
  status: 'pending' | 'completed';
};

const dummyPayments: Payment[] = [
  {
    id: '1',
    doctorName: 'Dr. Sarah Wilson',
    hospitalName: 'Central General Hospital',
    department: 'Cardiology',
    amount: 150.00,
    date: '2024-03-20',
    status: 'pending'
  },
  {
    id: '2',
    doctorName: 'Dr. James Chen',
    hospitalName: 'City Medical Center',
    department: 'Orthopedics',
    amount: 200.00,
    date: '2024-03-18',
    status: 'pending'
  },
  {
    id: '3',
    doctorName: 'Dr. Emily Brown',
    hospitalName: 'Central General Hospital',
    department: 'Neurology',
    amount: 180.00,
    date: '2024-03-15',
    status: 'completed'
  },
  {
    id: '4',
    doctorName: 'Dr. Michael Lee',
    hospitalName: 'City Medical Center',
    department: 'Dermatology',
    amount: 120.00,
    date: '2024-03-10',
    status: 'completed'
  },
];

const PaymentCard = ({ payment }: { payment: Payment }) => (
  <View 
    className="m-2 p-4 rounded-lg shadow-lg"
    style={{ backgroundColor: payment.status === 'pending' ? '#FEF3C7' : '#E5E7EB' }}
  >
    <View className="flex-row justify-between mb-2">
      <Text className="text-lg font-bold">{payment.doctorName}</Text>
      <Text className="font-bold">RM{payment.amount.toFixed(2)}</Text>
    </View>
    <View className="mb-1">
      <Text className="text-gray-600">{payment.hospitalName}</Text>
      <Text className="text-gray-600">{payment.department}</Text>
    </View>
    <View className="flex-row justify-between items-center mt-2">
      <Text className="text-sm text-gray-500">{payment.date}</Text>
      <View 
        className="px-3 py-1 rounded-full"
        style={{ backgroundColor: payment.status === 'pending' ? '#FEF3C7' : '#D1FAE5' }}
      >
        <Text 
          style={{ color: payment.status === 'pending' ? '#92400E' : '#065F46' }}
          className="font-medium"
        >
          {payment.status.charAt(0).toUpperCase() + payment.status.slice(1)}
        </Text>
      </View>
    </View>
  </View>
);

export default function BillsScreen() {
  const [selectedTab, setSelectedTab] = useState<'pending' | 'completed'>('pending');
  const filteredPayments = dummyPayments.filter(payment => payment.status === selectedTab);

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="p-4">
        <View className="flex-row justify-between mb-6">
          <TouchableOpacity 
            onPress={() => setSelectedTab('pending')}
            className={`flex-1 py-2 mx-1 rounded-lg ${selectedTab === 'pending' ? 'bg-amber-400' : 'bg-gray-200'}`}
          >
            <Text className={`text-center font-medium ${selectedTab === 'pending' ? 'text-gray-700' : 'text-gray-600'}`}>
              Pending
            </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => setSelectedTab('completed')}
            className={`flex-1 py-2 mx-1 rounded-lg ${selectedTab === 'completed' ? 'bg-amber-400' : 'bg-gray-200'}`}
          >
            <Text className={`text-center font-medium ${selectedTab === 'completed' ? 'text-gray-700' : 'text-gray-600'}`}>
              Completed
            </Text>
          </TouchableOpacity>
        </View>

        {filteredPayments.map(payment => (
          <PaymentCard key={payment.id} payment={payment} />
        ))}
      </View>
    </ScrollView>
  );
}