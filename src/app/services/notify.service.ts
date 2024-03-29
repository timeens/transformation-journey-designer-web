import { Injectable } from "@angular/core";
declare var $: any;

@Injectable()
export class NotifiyService {
  public error(title, msg = "") {
    this.showNotification("danger", title, msg);
  }
  public info(title, msg = "") {
    this.showNotification("info", title, msg);
  }
  public warning(title, msg = "") {
    this.showNotification("warning", title, msg);
  }
  public success(title, msg = "") {
    this.showNotification("success", title, msg);
  }

  private showNotification(
    type = "info",
    title = "Notification",
    message = ""
  ) {
    $.notify(
      {
        icon: "notifications",
        title,
        message,
      },
      {
        type,
        timer: 500,
        placement: {
          from: "bottom",
          align: "left",
        },
        template:
          '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
          '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
          '<i class="material-icons" data-notify="icon">notifications</i> ' +
          '<span data-notify="title">{1}</span> ' +
          '<span data-notify="message">{2}</span>' +
          '<div class="progress" data-notify="progressbar">' +
          '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
          "</div>" +
          '<a href="{3}" target="{4}" data-notify="url"></a>' +
          "</div>",
      }
    );
  }
}
