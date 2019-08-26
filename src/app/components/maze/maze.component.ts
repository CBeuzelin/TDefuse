import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maze',
  templateUrl: './maze.component.html',
  styleUrls: ['./maze.component.scss']
})
export class MazeComponent implements OnInit {

  MAZES = [
    {
      markers: [],
      grid: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      ]
    },

    // Maze 1
    {
      markers: [[0, 2], [10, 4]],
      grid: [
        [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1],
        [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0],
        [0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0],
        [0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0],
        [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
      ]
    },

    // Maze 2
    {
      markers: [[8, 2], [2, 6]],
      grid: [
        [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1],
        [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
        [0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0],
        [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0],
        [0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0],
        [0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0],
        [0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0],
        [0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0],
        [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
      ]
    },

    // Maze 3
    {
      markers: [[6, 6], [10, 6]],
      grid: [
        [0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0],
        [0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0],
        [0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0],
        [1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0],
        [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
        [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
        [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
        [0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0],
        [0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
      ]
    },

    // Maze 4
    {
      markers: [[0, 0], [0, 6]],
      grid: [
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0],
        [0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0],
        [0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0],
        [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0],
      ]
    },

    // Maze 5
    {
      markers: [[8, 4], [6, 10]],
      grid: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1],
        [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
        [0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0],
        [0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0],
        [0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      ]
    },

    // Maze 6
    {
      markers: [[8, 0], [4, 8]],
      grid: [
        [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
        [0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0],
        [0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0],
        [0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1],
        [0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0],
        [1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
        [0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
      ]
    },

    // Maze 7
    {
      markers: [[2, 0], [2, 10]],
      grid: [
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0],
        [0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0],
        [0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
        [1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1],
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
        [0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0],
        [0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      ]
    },

    // Maze 8
    {
      markers: [[6, 0], [4, 6]],
      grid: [
        [0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0],
        [0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0],
        [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0],
        [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1],
        [0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      ]
    },

    // Maze 9
    {
      markers: [[4, 2], [0, 8]],
      grid: [
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0],
        [0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0],
        [0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
        [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0],
        [0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0],
        [0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0],
        [0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0],
        [0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0],
        [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1],
        [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
      ]
    },
  ];

  currentMaze = 0;
  enteredPoints = {
    marker1: [],
    marker2: [],
    start: [],
    end: []
  };
  mazeValidated: boolean;
  path: number[] = [];
  pathGrid: any[];

  constructor() { }

  ngOnInit() {
  }

  arraysEqual(a, b): boolean {
    if (a === b) { return true; }
    if (a == null || b == null) { return false; }
    if (a.length !== b.length) { return false; }

    for (let i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) { return false; }
    }
    return true;
  }

  isMarker(point: number[]): boolean {
    return this.arraysEqual(this.enteredPoints.marker1, point) || this.arraysEqual(this.enteredPoints.marker2, point);
  }

  cyclePoint(point: number[]) {
    if (point[0] % 2 === 0 && point[1] % 2 === 0 && this.mazeValidated) {
      switch (this.isEnteredPoint(point)) {
        case 'start':
          this.enteredPoints.start = [];
          this.setPointAsKey('end', point);
          break;
        case 'end':
          this.enteredPoints.end = [];
          break;
        default:
          if (!this.setPointAsKey('start', point)) {
            this.setPointAsKey('end', point);
          }
          break;
      }

      this.path = [];
      if (this.enteredPoints.start.length && this.enteredPoints.end.length) {
        this.pathGrid = JSON.parse(JSON.stringify(this.MAZES[this.currentMaze].grid));
        const startPoint = JSON.parse(JSON.stringify(this.enteredPoints.start));

        this.findShortestPath(this.enteredPoints.start, JSON.parse(JSON.stringify(this.MAZES[this.currentMaze].grid)))
          .forEach((direction, index) => {
            if (index % 2 === 1) {
              this.path.push(direction);
              this.pathGrid[startPoint[1]][startPoint[0]] = direction;

              switch (direction) {
                case 'Haut':
                  startPoint[1] -= 2;
                  break;
                case 'Droite':
                  startPoint[0] += 2;
                  break;
                case 'Bas':
                  startPoint[1] += 2;
                  break;
                case 'Gauche':
                  startPoint[0] -= 2;
                  break;
              }
            }
          });
      }
    }
  }

  toggleMarker(point: number[]) {
    if (point[0] % 2 === 0 && point[1] % 2 === 0 && !this.mazeValidated) {
      if (this.isMarker(point)) {
        if (this.arraysEqual(this.enteredPoints.marker1, point)) {
          this.enteredPoints.marker1 = [];
        } else {
          this.enteredPoints.marker2 = [];
        }
      } else {
        if (!this.enteredPoints.marker1.length) {
          this.enteredPoints.marker1 = point;
        } else if (!this.enteredPoints.marker2.length) {
          this.enteredPoints.marker2 = point;
        }
      }

      this.checkCorrespondingMaze();
    }
  }

  validateMaze() {
    if (this.mazeValidated) {
      this.mazeValidated = undefined;
      this.enteredPoints.marker1 = [];
      this.enteredPoints.marker2 = [];
      this.enteredPoints.start = [];
      this.enteredPoints.end = [];
      this.path = [];
      this.currentMaze = 0;
    } else {
      this.mazeValidated = this.checkCorrespondingMaze();
    }
  }

  private isEnteredPoint(point: number[]): string | undefined {
    if (this.arraysEqual(this.enteredPoints.start, point)) {
      return 'start';
    }

    if (this.arraysEqual(this.enteredPoints.end, point)) {
      return 'end';
    }

    return;
  }

  private setPointAsKey(key: string, point: number[]): boolean {
    if (!this.enteredPoints[key].length) {
      this.enteredPoints[key] = point;
      return true;
    }
    return false;
  }

  private checkCorrespondingMaze(): boolean {
    let mazeFound = false;

    if (this.enteredPoints.marker1.length && this.enteredPoints.marker2.length) {
      this.MAZES.forEach((maze, index) => {
        if (this.isMarker(maze.markers[0]) && this.isMarker(maze.markers[1])) {
          this.currentMaze = index;
          mazeFound = true;
        }
      });
    }

    if (mazeFound) {
      return true;
    } else {
      this.currentMaze = 0;
      return false;
    }
  }

  // Start location will be in the following format:
  // [distanceFromTop, distanceFromLeft]
  private findShortestPath(startPoint, grid) {
    const distanceFromTop = startPoint[1];
    const distanceFromLeft = startPoint[0];

    // Each "location" will store its coordinates
    // and the shortest path required to arrive there
    const location = {
      distanceFromTop,
      distanceFromLeft,
      path: [],
      status: 'Start'
    };

    // Initialize the queue with the start location already inside
    const queue = [location];

    // Loop through the grid searching for the goal
    while (queue.length > 0) {
      // Take the first location off the queue
      const currentLocation = queue.shift();

      // Explore North
      let newLocation = this.exploreInDirection(currentLocation, 'Haut', grid);
      if (newLocation.status === 'Goal') {
        return newLocation.path;
      } else if (newLocation.status === 'Valid') {
        queue.push(newLocation);
      }

      // Explore East
      newLocation = this.exploreInDirection(currentLocation, 'Droite', grid);
      if (newLocation.status === 'Goal') {
        return newLocation.path;
      } else if (newLocation.status === 'Valid') {
        queue.push(newLocation);
      }

      // Explore South
      newLocation = this.exploreInDirection(currentLocation, 'Bas', grid);
      if (newLocation.status === 'Goal') {
        return newLocation.path;
      } else if (newLocation.status === 'Valid') {
        queue.push(newLocation);
      }

      // Explore West
      newLocation = this.exploreInDirection(currentLocation, 'Gauche', grid);
      if (newLocation.status === 'Goal') {
        return newLocation.path;
      } else if (newLocation.status === 'Valid') {
        queue.push(newLocation);
      }
    }

    // No valid path found
    return false;

  }

  // This function will check a location's status
  // (a location is "valid" if it is on the grid, is not an "obstacle",
  // and has not yet been visited by our algorithm)
  // Returns "Valid", "Invalid", "Blocked", or "Goal"
  private locationStatus(location, grid) {
    const dft = location.distanceFromTop;
    const dfl = location.distanceFromLeft;

    if (location.distanceFromLeft < 0 ||
      location.distanceFromLeft >= 11 ||
      location.distanceFromTop < 0 ||
      location.distanceFromTop >= 11) {

      // location is not on the grid--return false
      return 'Invalid';
    } else if (this.arraysEqual([dfl, dft], this.enteredPoints.end)) {
      return 'Goal';
    } else if (grid[dft][dfl] !== 0) {
      // location is either an obstacle or has been visited
      return 'Blocked';
    } else {
      return 'Valid';
    }
  }

  // Explores the grid from the given location in the given
  // direction
  private exploreInDirection(currentLocation, direction, grid) {
    const newPath = currentLocation.path.slice();
    newPath.push(direction);

    let dft = currentLocation.distanceFromTop;
    let dfl = currentLocation.distanceFromLeft;

    if (direction === 'Haut') {
      dft -= 1;
    } else if (direction === 'Droite') {
      dfl += 1;
    } else if (direction === 'Bas') {
      dft += 1;
    } else if (direction === 'Gauche') {
      dfl -= 1;
    }

    const newLocation = {
      distanceFromTop: dft,
      distanceFromLeft: dfl,
      path: newPath,
      status: 'Unknown'
    };
    newLocation.status = this.locationStatus(newLocation, grid);

    // If this new location is valid, mark it as 'Visited'
    if (newLocation.status === 'Valid') {
      grid[newLocation.distanceFromTop][newLocation.distanceFromLeft] = 'Visited';
    }

    return newLocation;
  }

  leadingZero(i: number): string {
    if (i < 10) {
      return `0${i}`;
    }

    return i.toString();
  }
}
