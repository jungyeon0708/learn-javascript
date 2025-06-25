// global byID

function byID(id) {
  return document.getElementById(id);
}

{
  const para = byID("notice");
  //data-* 사용자(개발자) 정의 속성 쓰기
  para.dataset.category = "frontend-web-development";
  para.dataset.userId = "user123";
  para.dataset.status = "inactive";
  para.dataset.role = "guest";
  //data-* 사용자(개발자) 정의 속성 읽기

  console.log(para.dataset.category);
  console.log(para.dataset.userId);
  console.log(para.dataset.status);
  console.log(para.dataset.role);

  // data-* 사용자(개발자) 정의 속성 일괄 삭제
  delete para.dataset.category;
  delete para.dataset.userId;
  delete para.dataset.status;
  delete para.dataset.role;

  // data-* 사용자(개발자) 정의 속성 일괄 읽기
  console.log(para.dataset);
}
