

import { LineChart as LChart, Line, XAxis, YAxis, Tooltip } from 'recharts';
const LineChart = () => {
    const studentsMarks = [
        { id: 1, name: 'Aminur Rahman', maths: 85, physics: 78, chemistry: 80, ict: 88 },
        { id: 2, name: 'Sohana Parvin', maths: 70, physics: 85, chemistry: 88, ict: 91 },
        { id: 3, name: 'Shamsul Haque', maths: 78, physics: 80, chemistry: 75, ict: 82 },
        { id: 4, name: 'Meherun Nahar', maths: 92, physics: 38, chemistry: 19, ict: 94 },
        { id: 5, name: 'Sajedul Islam', maths: 80, physics: 74, chemistry: 78, ict: 83 },
        { id: 6, name: 'Shahina Begum', maths: 88, physics: 86, chemistry: 82, ict: 87 },
        { id: 7, name: 'Naimul Haque', maths: 46, physics: 72, chemistry: 70, ict: 75 },
        { id: 8, name: 'Tasmina Akter', maths: 95, physics: 92, chemistry: 94, ict: 97 },
        { id: 9, name: 'Rashedul Islam', maths: 89, physics: 84, chemistry: 87, ict: 90 },
        { id: 10, name: 'Rifat Jahan', maths: 84, physics: 80, chemistry: 82, ict: 86 },
        { id: 11, name: 'Shoaib', maths: 87, physics: 83, chemistry: 45, ict: 89 } 
      ];
      
      
      
    return (
        <div>
            <LChart width={600} height = {200} data = {studentsMarks}>
              
                <Line dataKey= "maths"  stroke="yellow"></Line>
                <Line dataKey= "physics"  stroke="red"></Line>
                <Line dataKey= "chemistry"  stroke="blue"></Line>
                <XAxis dataKey="name" />
                <YAxis />
            <Tooltip></Tooltip>
            </LChart>
            
        </div>
    );
};

export default LineChart;