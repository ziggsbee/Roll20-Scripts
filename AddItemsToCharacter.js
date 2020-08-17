/**
AddItemsToCharacter.js by Nickalas Porsch

MIT License

Copyright (c) 2020 nwporsch

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

 */

on("chat:message", function(msg){ //When there is a new chat message we will perform this action
  if(msg.type=="api" && msg.content.indexOf("!addItem") ==  0){ //Did the message start with an ! and starts with AddItem

    var selected = msg.selected; //See all messages selected when message was sent

      var tok = getObj("graphic",selected[0]._id); // Gets a reference to the token selected

      var character = getObj("character",tok.get("@{repeating_item_$0_name}")); // Gets a reference to the character associated with the token

       sendChat(character.get("name"), "Selected One Item");
  }



});
