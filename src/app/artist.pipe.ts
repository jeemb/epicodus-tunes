import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'artist'
})
export class ArtistPipe implements PipeTransform {

  transform(input: any[], sortValue: string) {
    if (input) {
      if(sortValue === "high") {
        let output: any[]=[];
        input.forEach(album => {
          if (album.artist[0].toLowerCase() >= 'n') {
            output.push(album);
          }
        });
        return output;
      } else if (sortValue === "low") {
        let output: any[]=[];
        input.forEach(album => {
          if (album.artist[0].toLowerCase() <= 'm') {
            output.push(album);
          }
        });
        return output;
      } else {
        return input;
      }
    }
  }
}
