import {
  Authenticated,
  BodyParams,
  Controller,
  Delete,
  Get,
  PathParams,
  Post,
  Put,
  Required,
  Status
} from "@tsed/common";
import {NotFound} from "ts-httpexceptions";
import {Calendar} from "../../interfaces/Calendar";
import {CalendarsService} from "../../services/calendars/CalendarsService";
import {EventsCtrl} from "../events/EventsCtrl";

@Controller("/calendars", EventsCtrl)
export class CalendarsCtrl {

  constructor(private calendarsService: CalendarsService) {
  }

  @Get("/:moedaOrigem/:moedaDestino")
  async get(@Required() @PathParams("moedaOrigem") moedaOrigem: string,
                        @PathParams("moedaDestino") moedaDestino: string): Promise<Calendar> {

    const calendar = await this.calendarsService.converter(id);

    if (calendar) {
      return calendar;
    }

    throw new NotFound("Calendar not found");
  }
}
