function StudentCard({student}) {
    return(
       <div classname="bg-white shadow-md rounded-x1 p-4 text-gray-800"> 
           <h2 classname="text-x1 font-semibold">{student.name}</h2>
           <p>
               <strong>Roll:</strong> {student.roll}
           </p>
           <p>
                <strong>dept:</strong> {student.department}
           </p>
           <p>
                <strong>Email:</strong> {student.email}
           </p>
        </div>
    );
}
   
export default StudentCard;

        
    