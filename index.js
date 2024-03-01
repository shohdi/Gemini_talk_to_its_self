// node --version # Should be >= 18
// npm install @google/generative-ai

const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

let chat = null;
let chat2 = null;
let lastChate = null;
let started = false;
let lastMessage = null;
let timerOut = null;

const MODEL_NAME = "gemini-1.0-pro";


async function runChat(API_KEY) {
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: MODEL_NAME });

  const generationConfig = {
    temperature: 0.9,
    topK: 1,
    topP: 1,
    maxOutputTokens: 2048,
  };

  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
    },
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
    },
  ];

  let chat = model.startChat({
    generationConfig,
    safetySettings,
    history: [
    ],
  });

  //const result = await chat.sendMessage("YOUR_USER_INPUT");
  //const response = result.response;
  //console.log(response.text());
  return chat;
}



async function getMessage(chat, msg) {
  let result = await chat.sendMessage(msg);
  let response = result.response;
  return response;
}


function encode(htmlText) {
  $('#encoder').text(htmlText);
  let ret = $('#encoder').html();

  while (ret.indexOf(' ') >= 0) {
    ret = ret.replace(' ', '&nbsp;');
  }
  while (ret.indexOf('\t') >= 0) {
    ret = ret.replace('\t', '&nbsp;&nbsp;&nbsp;');
  }
  while (ret.indexOf('\n') >= 0) {
    ret = ret.replace('\n', '<br />');
  }
  return ret;
}

function checkApiKey()
{
   if(localStorage['apiKey'] != null )
   {
      let key = localStorage['apiKey'];
      $('#api_key').val(key);
      $('#apiKeyDiv').hide();

   }
}

function checkComponents()
{
   if(started)
   {
     $('#topicStart').hide();

   }
   else
   {
    $('#topicStart').show();
    chat=null;
    chat2=null;
    lastChate = null;
    lastMessage = null;
   }
}

function saveApiKey()
{
  
  localStorage['apiKey'] = $('#api_key').val();
  //console.log('save run ' + localStorage['apiKey']);
  checkApiKey();
}


async function clickStart(e) {
  if (e != null)
  {
    e.preventDefault();
    $('#result').html('');
    started = true;
  
  }

  if(e != null)
  {
  $('#loadingDiv').show();
  }
  var apiKey = $('#api_key').val();
  if (chat == null) {
    try {
      chat = await runChat(apiKey);
      chat2 = await runChat(apiKey);
      
    }
    catch (ex) {
      
      started = false;
      checkComponents();
      $('#result').html($('#result').html() + '<br />Error : <br />' + ex.toString() + '<br />');
      $('#loadingDiv').hide();
      return false;
    }

  }
  var youMsg = $('#comment').val();
  if (lastMessage != null)
  {
    youMsg = lastMessage;
  }

  
  $('#comment').val('');
  if(e != null)
  {
  $('#result').html($('#result').html() + '<br />Topic : <br />' + youMsg + '<br />');
  }
  let respMessage = '';
  try {
    let currentChat = null;
    if(lastChate == null || lastChate == "Gemini Pro 2")
    {
      currentChat = chat;
      lastChate = "Gemini Pro 1";
    }
    else
    {
        currentChat = chat2;
        lastChate = "Gemini Pro 2";
    }
    response = await getMessage(currentChat, youMsg);
    saveApiKey();
    
    
    checkComponents();

  }
  catch (ex) {
    started = false;
    checkComponents();
    $('#result').html($('#result').html() + '<br />Error : <br />' + ex.toString() + '<br />');
    $('#loadingDiv').hide();
    return false;
  }
  if (response.candidates != null && response.candidates.length != null) {
    for (let i = 0; i < response.candidates.length; i++) {
      let candContent = response.candidates[i].content;
      if (candContent != null && candContent.parts != null && candContent.parts.length != null) {
        for (let j = 0; j < candContent.parts.length; j++) {
          respMessage = respMessage + '<br />' + encode(candContent.parts[j].text);
        }

      }
    }
  }



  $('#result').html($('#result').html() + '<br />' + lastChate + ' : <br />' + respMessage + '<br />');
  lastMessage = respMessage;
  try
  {
    $("#result").scrollTop($("#result")[0].scrollHeight);
  }
  catch(ex)
  {
    
  }
  $('#loadingDiv').hide();
  if(started)
  {
    timerOut = setTimeout(()=>{clickStart(null);},1000);
  }
  return false;
}


$(function () {

  checkApiKey();

  $(document).on('click', '#sendBtn', clickStart);




  $(document).on('click', '#clearBtn',  function (e) {
    e.preventDefault();
    started = false;
    clearTimeout(timerOut);
    
    checkComponents();
   
    return false;
  });
});
