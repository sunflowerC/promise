import $ from 'jquery';

export default () => {
  const p1 = new Promise((resolve, reject) => {
    $.ajax({
      url: 'http://60.210.40.196:25028/zxhsys-dzyd-consumption/tbusiBillJF/getCompanyCount',
      type: 'POST',
      success(data) {
        resolve(data);
      },
      error(err) {
        reject(err);
      },
    });
  });
  p1.then((data) => {
    console.log(data);
  }).catch((error) => {
    console.log(error);
  });
};

