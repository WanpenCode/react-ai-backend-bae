import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ViewNote = ({ user, onLogout }) => {
  const { id } = useParams();
  
  // Mock note data - ในความเป็นจริงจะดึงจาก API ตาม id
  const note = {
    id: id,
    title: 'Algorithm: Insertion Sort',
    content: `Insertion Sort processes the list from left to right, taking each element in turn and shifting it leftward through the already-sorted portion until it meets a smaller or equal value, then inserting it just after that position. Repeating this for every element builds up the sorted sequence incrementally, so when the final insertion is done the entire list is in order. Insertion Sort เป็นอัลกอริทึมที่ใช้เรียงลำดับข้อมูล มีขั้นตอนดังนี้ใช้การซ้อมกับ list ใครยิ่ง element น้อยกัน่ที่ก่อนก็ซ่ายเข้าซ้ายการให้เท่าเงิน่ที่มีค่า ซอมย้อน เมื่อ insert element ตรงตำแหน่งที่เราต้องก้าชนะมือจ่วย ก็ก่อน element ที่ได้โดย array จึ algorithm จะแล้ว สุดท้าย list ก็ sorted ชมงรอม`,
    tags: ['#DSA'],
    pinned: true,
    createdDate: '6/28/2025'
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="flex justify-between items-center px-6 py-4">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">📝</span>
            <span className="text-xl font-semibold text-blue-600">RAG Notes</span>
          </div>
          <div className="flex items-center space-x-4 text-sm">
            <span className="text-gray-600">{user?.email}</span>
            <Link to="/dashboard" className="text-gray-600 hover:text-gray-800">Dashboard</Link>
            <Link to={`/profile/${user?.email}`} className="text-gray-600 hover:text-gray-800">Profile</Link>
            <button onClick={onLogout} className="text-red-600 hover:text-red-800">Logout</button>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 py-8 max-w-4xl">
        {/* Note content */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold mb-6">{note.title}</h1>
        </div>
      </div>
    </div>
  );
};

export default ViewNote;