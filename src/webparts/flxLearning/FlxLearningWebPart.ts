import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './FlxLearningWebPart.module.scss';
import * as strings from 'FlxLearningWebPartStrings';
import "../../ExternalRef/css/bootstrap.css";
import "../../ExternalRef/css/style.css";

import { sp } from "@pnp/sp/presets/all";
import "../../ExternalRef/js/bootstrap.js";
import "../../ExternalRef/css/alertify.min.css";
var alertify: any = require("../../ExternalRef/js/alertify.min.js");

// var pagename = "";


 import * as $ from "jquery";
 var itemid = "";
 
 
export interface IFlxLearningWebPartProps {
  description: string;
}

export default class FlxLearningWebPart extends BaseClientSideWebPart<IFlxLearningWebPartProps> {
  protected onInit(): Promise<void> {
    return super.onInit().then(_ => {
      
      sp.setup({
        spfxContext: this.context
      });
    });
  }

  public render(): void {  
    this.domElement.innerHTML = `  

    <div class="btn-sectionflxlearn mx-2 my-2">        
    <button class="btn btn-border-flexlearn" data-bs-toggle="modal" data-bs-target="#staticBackdroptwo">Add</button>
    </div>
      <!-- <div class="addiconlearn">
      <span class="addiconflxlearn"data-bs-toggle="modal" data-bs-target="#staticBackdroptwo" ></span></div> -->
    <div class="learning-section d-flex" id="learnedit" >
    <div class="q-link m-2 border text-center p-2"> 
    <div class="iconaddlearn">
    <span class="editimageflxLearn"data-bs-toggle="modal" data-bs-target="#staticBackdropone"></span></div>
   
    <img class="q-link-img" src="https://media-exp1.licdn.com/dms/image/C5603AQG1sCX4C8uhCg/profile-displayphoto-shrink_800_800/0/1615561085905?e=1626307200&v=beta&t=SbQf_3OwRf5JSfMqg9fXLYvIwcfYWOLKl_lmJGr4qSE" alt="img"/>
    <div class="q-link-title">Personal Coaching</div>
    </div>
    <div class="q-link m-2 border text-center p-2">
    <img class="q-link-img" src="https://media-exp1.licdn.com/dms/image/C5603AQG1sCX4C8uhCg/profile-displayphoto-shrink_800_800/0/1615561085905?e=1626307200&v=beta&t=SbQf_3OwRf5JSfMqg9fXLYvIwcfYWOLKl_lmJGr4qSE" alt="img"/>
    <div class="q-link-title">Education</div>
    </div> 
    <div class="q-link m-2 border text-center p-2">
    <img class="q-link-img" src="https://media-exp1.licdn.com/dms/image/C5603AQG1sCX4C8uhCg/profile-displayphoto-shrink_800_800/0/1615561085905?e=1626307200&v=beta&t=SbQf_3OwRf5JSfMqg9fXLYvIwcfYWOLKl_lmJGr4qSE" alt="img"/>
    <div class="q-link-title">Education</div>
    </div>
    <div class="q-link m-2 border text-center p-2">
    <img class="q-link-img" src="https://media-exp1.licdn.com/dms/image/C5603AQG1sCX4C8uhCg/profile-displayphoto-shrink_800_800/0/1615561085905?e=1626307200&v=beta&t=SbQf_3OwRf5JSfMqg9fXLYvIwcfYWOLKl_lmJGr4qSE" alt="img"/>
    <div class="q-link-title">Personal Coaching</div>
    </div>
    <div class="q-link m-2 border text-center p-2">
    <img class="q-link-img" src="https://media-exp1.licdn.com/dms/image/C5603AQG1sCX4C8uhCg/profile-displayphoto-shrink_800_800/0/1615561085905?e=1626307200&v=beta&t=SbQf_3OwRf5JSfMqg9fXLYvIwcfYWOLKl_lmJGr4qSE" alt="img"/>
    <div class="q-link-title">Education</div>
    </div>
   
    </div>
                                          
                                                                    

    

                                                 <!-- Modal -->

<div class="modal fade" id="staticBackdropone" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog learning-modal-dialog ">
    <div class="modal-content">  
      <div class="modal-header modal-tile-header">   
        <h5 class="modal-title w-100 text-center modallearn-color" id="staticBackdropLabel"> Edit Link </h5>
     <!--   <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> -->
      </div>
      
      
      <div class="modal-body  modalbody-flexlearn">
      <div class="row align-items-center my-3"><div class="col-4">Title</div><div class="col-1">:</div><div class="col-7">
      <input type="text" class="form-control" id="TitleFLXlearning" aria-describedby=""></div></div>
      <div class="row align-items-center my-3"><div class="col-4">URL</div><div class="col-1">:</div><div class="col-7">
      <input type="text" class="form-control" id="URLFLXlearning" value="" aria-describedby=""></div></div>

     <!-- <div class="row align-items-center my-3"><div class="col-4">OpeningNewTab</div>
      <div class="col-1">:</div><div class="col-7">
      <div class="form-check">
  <input class="form-check-input" type="checkbox" value="Yes" id="checkboxopenewtabFLXlearning">
 
</div></div></div>                               
      
     
      <div class="row align-items-center my-3"><div class="col-4">Visible</div><div class="col-1">:</div><div class="col-7 custom-arrow">
      <div class="form-check">
  <input class="form-check-input" type="checkbox" value="Yes" id="checkboxvisibleFLXlearning">
  
</div></div></div>  -->

<div class="row align-items-center my-3"><div class="col-4">Document Link</div><div class="col-1">:</div>
<div class="col-7">
<div class="btn-group option-checkboxes w-100" role="group" aria-label="Basic checkbox toggle button group">

<input type="checkbox" class="btn-check" id="checkboxvisibleFLXlearning" autocomplete="off">
<label class="btn btn-learn-outline-theme" for="checkboxvisibleFLXlearning">Visible</label>       

<input type="checkbox" class="btn-check" id="checkboxopenewtabFLXlearning" autocomplete="off">
<label class="btn btn-learn-outline-theme" for="checkboxopenewtabFLXlearning">Open a new tab</label> </div> 
</div>
</div>
      <div class="row align-items-center my-3"><div class="col-4">Image</div><div class="col-1">:</div><div class="col-7">
       <input type="file" class="form-control-file custom-life-learn" class="mt-1" id="File1FLXlearning"></div></div>
    </div>


      
    <div class="modal-footer  modal-tile-footer justify-content-between"> 
    <div class="btns-left">
    <button type="button" class="btn btn-sm btn-danger" id="btnDeleteLearn" style="" data-bs-toggle="modal" data-bs-target="#deleteAlterModal">Delete</button>
    </div>

      <div class="btns-right d-flex">
      <div class="addScreen">
      <button type="button" class="btn btn-sm btn-secondary" id="" data-bs-dismiss="modal">Close</button>
      <button type="button" class="btn btn-sm btn-theme" id="btnmodalSubmit" style="display: none;">Submit</button>
      </div>
      <div class="viewScreen">
      <!--<button type="button" class="btn btn-sm btn-secondary" data-bs-dismiss="modal">Close</button>-->
      <button type="button" class="btn btn-sm btn-theme ms-2" id="btnUpdateLearn" style="">Update</button>
      </div>
      </div>
    </div>
    </div>
  </div>
</div>





                                                   <!-- Modal Add -->


<div class="modal fade" id="staticBackdroptwo" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog  learning-modal-dialog">
    <div class="modal-content">
      <div class="modal-header  modal-tile-header ">
        <h5 class="modal-title w-100 text-center modallearn-color" id="staticBackdropLabel">Add Link</h5>
        <!-- <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> -->
      </div>
       
      
      <div class="modal-body">
      <div class="row align-items-center my-3"><div class="col-4">Title</div><div class="col-1">:</div><div class="col-7"><input type="text" class="form-control" id="TitleFlXlearn" aria-describedby=""></div></div>
      <div class="row align-items-center my-3"><div class="col-4">URL</div><div class="col-1">:</div><div class="col-7"><input type="text" class="form-control" id="URLFlXlearn" value="" aria-describedby=""></div></div>

     <!-- <div class="row align-items-center my-3"><div class="col-4">OpeningNewTab</div><div class="col-1">:</div>
      <div class="col-7">
      <div class="form-check">
  <input class="form-check-input" type="checkbox" value="Yes" id="checkboxopentewtabFlXlearn">
 
</div></div></div>  -->
      
     
  <!--    <div class="row align-items-center my-3"><div class="col-4">Visible</div><div class="col-1">:</div><div class="col-7 custom-arrow">
      <div class="form-check">
  <input class="form-check-input" type="checkbox" value="Yes" id="checkboxvisibleFlXlearn">
  
</div></div></div> -->
<div class="row align-items-center my-3"><div class="col-4">Document Link</div><div class="col-1">:</div>
<div class="col-7 ">
<div class="btn-group option-checkboxes w-100" role="group" aria-label="Basic checkbox toggle button group">

<input type="checkbox" class="btn-check" id="checkboxvisibleFlXlearn" autocomplete="off">
<label class="btn btn-learn-outline-theme" for="checkboxvisibleFlXlearn">Visible</label>       

<input type="checkbox" class="btn-check" id="checkboxopentewtabFlXlearn" autocomplete="off">
<label class="btn btn-learn-outline-theme" for="checkboxopentewtabFlXlearn">Open a new tab</label> </div> 
</div>
</div>
      <div class="row align-items-center my-3"><div class="col-4">Image</div><div class="col-1">:</div><div class="col-7"> 
      <input type="file" class="form-control-file custom-life-learn" class="mt-1" id="File1FlXlearn" onChange={uploadFile} ></div></div>
    </div>
  
                   
      
    <div class="modal-footer modal-tile-footer justify-content-between"> 
    <div class="btns-left">
    <button type="button" class="btn btn-sm btn-danger" id="" style="display: none;" data-bs-toggle="modal" data-bs-target="#deleteAlterModal">Delete</button>
    </div>

      <div class="btns-right d-flex">
      <div class="addScreen">
      <button type="button" class="btn btn-sm btn-secondary" id="" data-bs-dismiss="modal">Close</button>
      <button type="button" class="btn btn-sm btn-theme" id="btnmodalSubmit" style="display: none;">Submit</button>
      </div>
      <div class="viewScreen">
      <!--<button type="button" class="btn btn-sm btn-secondary" data-bs-dismiss="modal">Close</button>-->
      <button type="button" class="btn btn-sm btn-theme ms-2" id="btnSubmitLearnFLXLearn" style="">Submit</button>
      </div>
      </div>
    </div>
    </div>
  </div>
</div>
`;
FetchFLXLearning();




$(document).on('click','.editimageflxLearn',function(e){
  e.currentTarget.getAttribute("data-id");
   itemid =e.currentTarget.getAttribute("data-id") ;
   GetFLXLearning();
 
})
$("#btnUpdateLearn").click(function(){
    UpdateFLXLearning(itemid);
  })
  
  $("#btnDeleteLearn").click(function(){
    DeleteFLXLearning(itemid);
  })
  
  $(document).on('click','#btnSubmitLearnFLXLearn',function(){
    AddFLXLearning();
  })
  }

  

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]                                        
    };
  }
}
function FetchFLXLearning() {
  var html = "";
  sp.web.lists
    .getByTitle("FLXLearning")
    .items.select("*","Title", "URL", "OpeningNewTab", "Visible", "Image").filter("Visible eq '1'").getAll()
    .then((items: any[]) => {
      // console.log(items);

      for (var i = 0; i < items.length; i++) {
        const item = items[i];
        const itemImage = JSON.parse(item.Image) || {}
        const serverUrl = itemImage.serverUrl || ""
        const imageUrl = itemImage.serverRelativeUrl || ""
        // console.log(i,"item",item)     
        // console.log(i,"imageUrl",imageUrl)
          // console.log(item.ID);
        if (item.OpeningNewTab === true) {
          html += `<div class = "q-link m-2 border text-center p-2"><div class="iconaddlearn">
            <span class="editimageflxLearn" data-bs-toggle="modal" data-bs-target="#staticBackdropone" data-id ="${item.ID}"></span></div>
            <img class="q-link-img" src="${serverUrl}${imageUrl}" alt="img"/><a  class="remove_underline_flxLearn" href="${item.URL}" target="_blank">
            <div class="q-link-title">${item.Title}</div></a></div>`
          // console.log(items)
        }
        else {
          html += `<div class = "q-link m-2 border text-center p-2"><div class="iconaddlearn">
          <span class="editimageflxLearn" data-bs-toggle="modal" data-bs-target="#staticBackdropone" data-id="${item.ID}"></span>
          </div>
            <img class="q-link-img" src="${serverUrl}${imageUrl}" alt="img"/><a class="remove_underline_flxLearn" href="${item.URL}">
            <div class="q-link-title ">${item.Title}</div></a></div>`
        }

      }

      var element = document.getElementById("learnedit");
      element.innerHTML = html;

    })
}

 function GetFLXLearning(){
 sp.web.lists.getByTitle("FLXLearning").items.getById(parseInt(itemid)).get().then((items: any[]) => 
  {
    $("#TitleFLXlearning").val(items['Title']);
    $("#URLFLXlearning").val(items['URL']);
    $( "#checkboxopenewtabFLXlearning" ).prop("checked",items['OpeningNewTab']); 
    $( "#checkboxvisibleFLXlearning" ).prop( "checked",items['Visible']);
  console.log(items);
 })
 
}

function UpdateFLXLearning(itemid){
  sp.web.lists.getByTitle("FLXLearning").items.getById(parseInt(itemid)).update({
          Title: $("#TitleFLXlearning").val(),
           URL: $("#URLFLXlearning").val(),
           OpeningNewTab: $("#checkboxopenewtabFLXlearning").is(':checked') ? true : false,
           Visible: $("#checkboxvisibleFLXlearning").is(':checked') ? true : false,
          
           
          }).then(i => {
            AlertMessage("Record Updated successfully");
          });
        

} 

function DeleteFLXLearning(itemid){
  sp.web.lists.getByTitle("FLXLearning").items.getById((parseInt(itemid))).delete().then(_ => {
    
  });
  AlertMessage("Record Deleted successfully");

}

function AddFLXLearning(){

  // const uploadFile = async (evt) => {

  //   const file: File = evt.target.files[0];

  //   // upload to the root folder of site assets in this demo
  //   const assets = await sp.web.lists.ensureSiteAssetsLibrary();
  //   const fileItem = await assets.rootFolder.files.add(file.name, file, true);

  //   // bare minimum; probably you'll want other properties as well
  //   const img = {
  //     "serverRelativeUrl": fileItem.data.ServerRelativeUrl,
  //   };
      sp.web.lists.getByTitle("FLXLearning").items.add({
          Title: $("#TitleFlXlearn").val(),
           URL: $("#URLFlXlearn").val(),
           OpeningNewTab: $("#checkboxopentewtabFlXlearn").is(':checked') ? true : false,
           Visible: $("#checkboxvisibleFlXlearn").is(':checked') ? true : false,
        //  Image:JSON.stringify(img),
}).then(i => {
  AlertMessage("Record created successfully");
});
  // }
 }

function AlertMessage(Message) {
  alertify
    .alert()
    .setting({
      label: "OK",

      message: Message,

      onok: function () {
        window.location.href = "#";
        location.reload();

        //window.location.href = "#";
      },
    })
    .show()
    .setHeader("<em>Confirmation</em> ")
    .set("closable", false);
}  


// export const HelloWorld = () => {

//   const uploadFile = async (evt) => {

//     const file: File = evt.target.files[0];

//     // upload to the root folder of site assets in this demo
//     const assets = await sp.web.lists.ensureSiteAssetsLibrary();
//     const fileItem = await assets.rootFolder.files.add(file.name, file, true);

//     // bare minimum; probably you'll want other properties as well
//     const img = {
//       "serverRelativeUrl": fileItem.data.ServerRelativeUrl,
//     };

//     // create the item, stringify json for image column
//     await sp.web.lists.getByTitle("YourListWithImageColumn").items.add({
//       Title: "Hello",
//       YourImageColumn: JSON.stringify(img)
//     });
//   };

//   return (<div>
//     <input type='file' onChange={uploadFile} />
//   </div>);
// };