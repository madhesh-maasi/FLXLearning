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
export interface IFlxLearningWebPartProps {
  description: string; 
}
 
export default class FlxLearningWebPart extends BaseClientSideWebPart<IFlxLearningWebPartProps> {

  public render(): void {       
    this.domElement.innerHTML = ` 
      
    <div class="learning-section d-flex">
    <div class="q-link m-2 border text-center p-2"> 
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
    </div>`; 
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
