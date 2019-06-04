const express = require('express');
const nodemailer = require('nodemailer');
const smtpPool=require('nodemailer-smtp-pool');

const router = express.Router();

const commonApi = require('../common');

router.post('/', (req, res, next) => {
  let query = req.query;

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: '', // gmail 계정 아이디를 입력
      pass: '', // gmail 계정의 비밀번호를 입력,
      clientId: '',
      clientSecret: '',
      refreshToken: '',
      accessToken: ''
    }
  });

  let mailOptions = {
    from: '', // 발송 메일 주소 (위에서 작성한 gmail 계정 아이디)
    to: '', // 수신 메일 주소
    subject: '['+query.name+']'+query.subject, // 제목
    text: 'email:'+query.email+'\n'+query.message // 내용
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
      res.send('success');
    }
  });

});

module.exports = router;
