var students = [
    { stuid: "S01", name: "周夏", gender: "男",score: 86 },
    { stuid: "S02", name: "郑竹", gender: "男",score: 77 },
    { stuid: "S03", name: "吴兰", gender: "女",score: 35},
    { stuid: "S04", name: "李云", gender: "男",score: 56 }
  ];

  console.log(getMaxScore(students));

  function getMaxScore(students){
    let max = students[0].score;
    let min = students[0].score;
    
    for(let i = 0 ; i < students.length ; i++){
        max = max > students[i].score ? max : students[i].score;
        min = min < students[i].score ? min : students[i].score;
    }

    let maxName = '';
    let minName = '';
    for(let i = 0 ; i < students.length ; i++){
        if(students[i].score == max){
            maxName = students[i].name;
        }

        if(students[i].score == min){
            minName = students[i].name;
        }
    }

    return `学生中成绩最高的姓名为 ${maxName}  最低的姓名为 ${minName}`
  }