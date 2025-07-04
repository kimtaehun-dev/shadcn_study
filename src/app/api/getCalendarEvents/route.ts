import { NextResponse } from 'next/server';
import { fakerKO as faker } from '@faker-js/faker';

export async function GET(res:  NextResponse){
  const count = 10;
  const result = [];
  const withMinute = false;
    for (let i = 0; i < count; i++) {
      const start = faker.date.between({
        from: '2025-07-01T08:00:00',
        to: '2025-07-15T18:00:00',
      });
    const end = new Date(start.getTime() + 1000 * 60 * 60 * 2); // +2시간

    result.push({
      start: formatDateStr(start, withMinute),
      end: formatDateStr(end, withMinute),
      // title: faker.word.words({ count: { min: 1, max: 3 } }), // 제목 최대 3단어
      title: faker.location.city(),
      color: getRandomColor(),
    });
  }

  console.log(JSON.stringify(result));
  return NextResponse.json(
      {result},
      { status: 200 }
    );
}


const formatDateStr=(date: Date, withMinute = false)=>{
  const y = date.getFullYear();
  const m = date.getMonth()+1;
  const d = date.getDate();
  const h = date.getHours();
  const min = date.getMinutes();
  return withMinute ? `${y}-${m}-${d}-${h}-${min}` : `${y}-${m}-${d}-${h}`;
}

const getRandomColor = ()=>{
  return faker.color.rgb({ prefix: '#' });
}
