import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../../models/course';
import { StateService } from '../state.service';
import { StoreService } from '../store.service';
import { CourseHttpService } from './course-http.service';
import { confirm } from 'devextreme/ui/dialog';

interface CourseState {
  courseList: Array<Course>;
  exportData: Array<Course>;
  selectedCourse: Object;
  courseInstance: Course;
  totalPages: number;
  currentPage: number;
  totalItems: number;
  responseMsg: string;
}
const initialState: CourseState = {
  courseList: [],
  selectedCourse: {},
  courseInstance: undefined,
  exportData: [],
  totalPages: 0,
  currentPage: 0,
  totalItems: 0,
  responseMsg: '',
};
@Injectable({
  providedIn: 'root',
})
export class CourseStore extends StateService<CourseState> {
  constructor(
    private courseService: CourseHttpService,
    private store: StoreService
  ) {
    super(initialState);
  }
  /**
   * This is a function which fills the items received from pagination in a specific store's state variable.
   * 
   * @author Le Bao Anh
   * @version 1.0.0
   * @param {number} startIndex - The current page of ss pagination
   * @param {number} endIndex - The page size of ss pagination
   * @param {Array<Object>} sourceArray - The source array/state in a specific store service
   * @param {Array<Object>} addedArray - The array of items received from ss pagination
   * @return {Array<Object>} Return an array with filled items from ss pagination
   * @example
   * this.setState({
            sourceList: this.fillEmpty(
              page - 1,
              size,
              this.state.sourceList,
              arrayItemFromServer
            ),
          });
   */
  fillEmpty(
    startIndex: number,
    endIndex: number,
    sourceArray: Array<Course>,
    addedArray: Array<Course>
  ): Array<Course> {
    let result: Array<Course> = sourceArray;
    console.log('FILL INDEX');
    let fillIndex = startIndex * endIndex;
    console.log(fillIndex);
    for (var j = 0; j < addedArray.length; j++) {
      result[fillIndex] = addedArray[j];
      fillIndex++;
    }
    // endIndex = pageSize
    // pageSize = 5
    // 0 => 0,1,2,3,4,
    // 1 -> 5,6,7,8,9
    // 2 -> 10,11,12,13,14
    // 17 -> 85,86,87,88,89
    console.log('Filled array result');
    console.log(result);
    return result;
  }

  initInfiniteData(page: number, size: number) {
    return this.courseService
      .fetchCourse(page, size)
      .toPromise()
      .then((data: any) => {
        this.setState({
          courseList: data.data,
        });
        console.log('Current flag: infite list');
        console.log(this.state.courseList);
        this.setState({ totalItems: data.totalRecords });
        this.setState({ totalPages: data.totalPages });
        this.setState({ currentPage: data.pageNumber });
      });
  }

  loadInfiniteDataAsync(page: number, size: number) {
    this.setIsLoading(true);
    this.courseService.fetchCourse(page, size).subscribe({
      next: (data: any) => {
        this.setState({
          courseList: this.state.courseList.concat(data.data),
        });
        console.log('Infinite list');
        console.log(this.state.courseList);
        console.log('Server response');
        console.log(data);
        this.setState({ totalItems: data.totalRecords });
        this.setState({ totalPages: data.totalPages });
        this.setState({ currentPage: data.pageNumber });
        this.setIsLoading(false);
      },
      error: (data: any) => {
        this.setIsLoading(false);
        this.store.showNotif(data.error.responseMessage, 'error');
        console.log(data);
      },
    });
  }

  loadDataAsyncByLearnerID(page: number, size: number, learnerID: string) {
    this.setIsLoading(true);
    this.courseService.fetchCourseByLearnerID(page, size, learnerID).subscribe({
      next: (data: any) => {
        this.setState({
          courseList: this.fillEmpty(
            page - 1,
            size,
            this.state.courseList,
            data.data
          ),
        });
        console.log('Pure list');
        console.log(this.state.courseList);
        console.log('Server response');
        console.log(data);
        this.setState({ totalItems: data.totalRecords });
        this.setState({ totalPages: data.totalPages });
        this.setState({ currentPage: data.pageNumber });
        this.setIsLoading(false);
      },
      error: (data: any) => {
        this.setIsLoading(false);
        this.store.showNotif(data.error.responseMessage, 'error');
        console.log(data);
      },
    });
  }

  initInfiniteDataByLearnerID(page: number, size: number, learnerID: string) {
    return this.courseService
      .fetchCourseByLearnerID(page, size, learnerID)
      .toPromise()
      .then((data: any) => {
        this.setState({
          courseList: data.data,
        });
        console.log('Current flag: infite list');
        console.log(this.state.courseList);
        this.setState({ totalItems: data.totalRecords });
        this.setState({ totalPages: data.totalPages });
        this.setState({ currentPage: data.pageNumber });
      });
  }

  loadInfiniteDataAsyncByLearnerID(
    page: number,
    size: number,
    learnerID: string
  ) {
    this.setIsLoading(true);
    this.courseService.fetchCourseByLearnerID(page, size, learnerID).subscribe({
      next: (data: any) => {
        this.setState({
          courseList: this.state.courseList.concat(data.data),
        });
        console.log('Infinite list');
        console.log(this.state.courseList);
        console.log('Server response');
        console.log(data);
        this.setState({ totalItems: data.totalRecords });
        this.setState({ totalPages: data.totalPages });
        this.setState({ currentPage: data.pageNumber });
        this.setIsLoading(false);
      },
      error: (data: any) => {
        this.setIsLoading(false);
        this.store.showNotif(data.error.responseMessage, 'error');
        console.log(data);
      },
    });
  }

  initData(page: number, size: number) {
    this.courseService
      .fetchCourse(page, size)
      .toPromise()
      .then((data: any) => {
        this.setState({
          courseList: new Array<Course>(data.totalRecords),
        });
        console.log('Current flag: pure list');
        console.log(this.state.courseList);
        this.setState({ totalItems: data.totalRecords });
        this.setState({ totalPages: data.totalPages });
        this.setState({ currentPage: data.pageNumber });
      })
      .then(() => {
        this.loadDataAsync(page, size);
      });
  }

  initFilterByPropertyData(
    property: string,
    value: string,
    page: number,
    size: number
  ) {
    this.store.showNotif('Filtered Mode On', 'custom');
    this.courseService
      .filterCourseByProperty(property, value, page, size)
      .toPromise()
      .then((data: any) => {
        this.setState({
          courseList: new Array<Course>(data.totalRecords),
        });
        console.log('Current flag: filtered list');
        console.log(this.state.courseList);
        this.setState({ totalItems: data.totalRecords });
        this.setState({ totalPages: data.totalPages });
        this.setState({ currentPage: data.pageNumber });
      })
      .then(() => {
        this.filterCourseByProperty(property, value, page, size);
      });
  }

  initInfiniteFilterByPropertyData(
    property: string,
    value: string,
    page: number,
    size: number
  ) {
    this.store.showNotif('Filtered Mode On', 'custom');
    this.courseService
      .filterCourseByProperty(property, value, page, size)
      .toPromise()
      .then((data: any) => {
        this.setState({
          courseList: data.data,
        });
        console.log('Current flag: infinite filtered list');
        console.log(this.state.courseList);
        this.setState({ totalItems: data.totalRecords });
        this.setState({ totalPages: data.totalPages });
        this.setState({ currentPage: data.pageNumber });
      });
  }

  initSearchByPropertyData(
    property: string,
    value: string,
    page: number,
    size: number
  ) {
    this.store.showNotif('Searched Mode On', 'custom');
    this.courseService
      .searchCourseByProperty(property, value, page, size)
      .toPromise()
      .then((data: any) => {
        this.setState({
          courseList: new Array<Course>(data.totalRecords),
        });
        console.log('Current flag: searched list');
        console.log(this.state.courseList);
        this.setState({ totalItems: data.totalRecords });
        this.setState({ totalPages: data.totalPages });
        this.setState({ currentPage: data.pageNumber });
      })
      .then(() => {
        this.searchCourseByProperty(property, value, page, size);
      });
  }

  initInfiniteSearchByPropertyData(
    property: string,
    value: string,
    page: number,
    size: number
  ) {
    this.store.showNotif('Searched Mode On', 'custom');
    this.courseService
      .searchCourseByProperty(property, value, page, size)
      .toPromise()
      .then((data: any) => {
        if (data.totalRecords !== 0) {
          this.setState({
            courseList: data.data,
          });
        } else {
          this.store.showNotif('No result found!', 'custom');
        }
        console.log('Current flag: infitite searched list');
        console.log(this.state.courseList);
        this.setState({ totalItems: data.totalRecords });
        this.setState({ totalPages: data.totalPages });
        this.setState({ currentPage: data.pageNumber });
      });
  }

  initSortByPropertyData(
    value: string,
    order: string,
    page: number,
    size: number
  ) {
    this.store.showNotif('Sort Mode On', 'custom');
    this.courseService
      .sortCourseByProperty(value, order, page, size)
      .toPromise()
      .then((data: any) => {
        this.setState({
          courseList: new Array<Course>(data.totalRecords),
        });
        console.log('Current flag: sort list');
        console.log(this.state.courseList);
        this.setState({ totalItems: data.totalRecords });
        this.setState({ totalPages: data.totalPages });
        this.setState({ currentPage: data.pageNumber });
      })
      .then(() => {
        this.sortCourseByProperty(value, order, page, size);
      });
  }

  initInfiniteSortByPropertyData(
    value: string,
    order: string,
    page: number,
    size: number
  ) {
    this.store.showNotif('Sort Mode On', 'custom');
    this.courseService
      .sortCourseByProperty(value, order, page, size)
      .toPromise()
      .then((data: any) => {
        this.setState({
          courseList: data.data,
        });
        console.log('Current flag: sort list');
        console.log(this.state.courseList);
        this.setState({ totalItems: data.totalRecords });
        this.setState({ totalPages: data.totalPages });
        this.setState({ currentPage: data.pageNumber });
      });
  }

  loadDataAsync(page: number, size: number) {
    this.setIsLoading(true);
    this.courseService.fetchCourse(page, size).subscribe({
      next: (data: any) => {
        this.setState({
          courseList: this.fillEmpty(
            page - 1,
            size,
            this.state.courseList,
            data.data
          ),
        });
        console.log('Pure list');
        console.log(this.state.courseList);
        console.log('Server response');
        console.log(data);
        this.setState({ totalItems: data.totalRecords });
        this.setState({ totalPages: data.totalPages });
        this.setState({ currentPage: data.pageNumber });
        this.setIsLoading(false);
      },
      error: (data: any) => {
        this.setIsLoading(false);
        this.store.showNotif(data.error.responseMessage, 'error');
        console.log(data);
      },
    });
  }

  refresh(page: number, size: number) {
    this.setIsLoading(true);
    this.courseService.fetchCourse(page, size).subscribe({
      next: (data: any) => {
        this.setState({
          courseList: this.fillEmpty(
            page - 1,
            size,
            this.state.courseList,
            data.data
          ),
        });
        this.setState({ totalItems: data.totalRecords });
        this.setState({ totalPages: data.totalPages });
        this.setState({ currentPage: data.pageNumber });
        console.log('Pure list');
        console.log(this.state.courseList);
        console.log('Server response');
        console.log(data);
        this.store.showNotif('Refresh successfully', 'custom');
        this.setIsLoading(false);
      },
      error: (data: any) => {
        this.setIsLoading(false);
        this.store.showNotif(data.error.responseMessage, 'error');
        console.log(data);
      },
    });
  }

  setIsLoading(_isLoading: boolean) {
    this.store.setIsLoading(_isLoading);
  }

  $courseList: Observable<Array<Course>> = this.select(
    (state) => state.courseList
  );

  $exportData: Observable<Array<Course>> = this.select(
    (state) => state.exportData
  );

  $totalPages: Observable<Number> = this.select((state) => state.totalPages);

  $totalItems: Observable<Number> = this.select((state) => state.totalItems);

  $currentPage: Observable<Number> = this.select((state) => state.currentPage);

  $selectedCourse: Observable<Object> = this.select(
    (state) => state.selectedCourse
  );

  $courseInstance: Observable<Course> = this.select(
    (state) => state.courseInstance
  );

  uploadCourse(course: Course, page: number, size: number) {
    this.confirmDialog('').then((confirm: boolean) => {
      if (confirm) {
        this.setIsLoading(true);
        this.courseService.uploadCourse(course).subscribe({
          next: (data: any) => {
            this.setState({ responseMsg: data });
            this.setTotalItems(this.state.totalItems + 1);
            console.log(data);
            this.loadDataAsync(page, size);
            this.setIsLoading(false);
            this.store.showNotif(data.responseMessage, 'custom');
          },
          error: (data: any) => {
            this.setIsLoading(false);
            this.store.showNotif(data.error.responseMessage, 'error');
            console.log(data);
          },
        });
      }
    });
  }

  updateCourse(course: Course, page: number, size: number) {
    this.confirmDialog('').then((confirm: boolean) => {
      if (confirm) {
        this.setIsLoading(true);
        this.courseService.updateCourse(course).subscribe({
          next: (data: any) => {
            this.setState({ responseMsg: data });
            console.log(data);
            this.loadDataAsync(page, size);
            this.setIsLoading(false);
            this.store.showNotif(data.responseMessage, 'custom');
          },
          error: (data: any) => {
            this.setIsLoading(false);
            this.store.showNotif(data.error.responseMessage, 'error');
            console.log(data);
          },
        });
      }
    });
  }

  confirmDialog(msg: string) {
    if (msg != '') {
      return confirm(`<b>${msg}</b>`, 'Confirm changes');
    }
    return confirm(`<b>Are you sure?</b>`, 'Confirm changes');
  }

  deleteSelectedCourses(
    selectedCourses: Array<string>,
    page: number,
    size: number
  ) {
    this.confirmDialog('').then((confirm: boolean) => {
      if (confirm) {
        this.setIsLoading(true);
        this.courseService.deleteCourse(selectedCourses).subscribe({
          next: (data: any) => {
            this.setState({ responseMsg: data });
            console.log(data);
            this.loadDataAsync(page, size);
            console.log(this.state.courseList);
            this.setIsLoading(false);
            this.store.showNotif(data.responseMessage, 'custom');
          },
          error: (data: any) => {
            this.setIsLoading(false);
            this.store.showNotif(data.error.responseMessage, 'error');
            console.log(data);
          },
        });
      }
    });
  }

  deleteAll() {
    this.confirmDialog('Delete all items?').then((confirm: boolean) => {
      if (confirm) {
        this.setIsLoading(true);
        this.courseService.deleteAll().subscribe({
          next: (data: any) => {
            this.resetState();
            console.log(data);
            this.setIsLoading(false);
            this.store.showNotif(data.responseMessage, 'custom');
          },
          error: (data: any) => {
            this.setIsLoading(false);
            this.store.showNotif(data.error.responseMessage, 'error');
            console.log(data);
          },
        });
      }
    });
  }

  deleteCourse(id: Array<string>, page: number, size: number) {
    this.confirmDialog('').then((confirm: boolean) => {
      if (confirm) {
        this.setIsLoading(true);
        this.courseService.deleteCourse(id).subscribe({
          next: (data: any) => {
            this.setState({ responseMsg: data });
            this.setTotalItems(this.state.totalItems - 1);
            console.log(data);
            this.loadDataAsync(page, size);
            this.setIsLoading(false);
            this.store.showNotif(data.responseMessage, 'custom');
          },
          error: (data: any) => {
            this.setIsLoading(false);
            this.store.showNotif(data.error.responseMessage, 'error');
            console.log(data);
          },
        });
      }
    });
  }

  selectCourse(_course: Course) {
    this.setState({ selectedCourse: _course });
  }

  setTotalPages(_totalPages: number) {
    this.setState({ totalPages: _totalPages });
  }

  setTotalItems(_totalItems: number) {
    this.setState({ totalItems: _totalItems });
  }

  setCurrentPage(_currentPage: number) {
    this.setState({ currentPage: _currentPage });
  }

  filterCourseByProperty(
    property: string,
    value: string,
    page: number,
    size: number
  ) {
    this.setIsLoading(true);
    this.courseService
      .filterCourseByProperty(property, value, page, size)
      .subscribe({
        next: (data: any) => {
          if (data.totalRecords !== 0) {
            this.setState({
              courseList: this.fillEmpty(
                page - 1,
                size,
                this.state.courseList,
                data.data
              ),
            });
            console.log('Filtered list');
            console.log(this.state.courseList);
            console.log('Server response');
            console.log(data);
            this.setState({ totalItems: data.totalRecords });
            this.setState({ totalPages: data.totalPages });
            this.setState({ currentPage: data.pageNumber });
          }
          this.setIsLoading(false);
        },
        error: (data: any) => {
          this.setIsLoading(false);
          this.store.showNotif(data.error.responseMessage, 'error');
          console.log(data);
        },
      });
  }

  filterInfiniteCourseByProperty(
    property: string,
    value: string,
    page: number,
    size: number
  ) {
    this.setIsLoading(true);
    this.courseService
      .filterCourseByProperty(property, value, page, size)
      .subscribe({
        next: (data: any) => {
          this.setState({
            courseList: this.state.courseList.concat(data),
          });
          console.log('Filtered list');
          console.log(this.state.courseList);
          console.log('Server response');
          console.log(data);
          this.setState({ totalItems: data.totalRecords });
          this.setState({ totalPages: data.totalPages });
          this.setState({ currentPage: data.pageNumber });
          this.setIsLoading(false);
        },
        error: (data: any) => {
          this.setIsLoading(false);
          this.store.showNotif(data.error.responseMessage, 'error');
          console.log(data);
        },
      });
  }

  searchCourseByProperty(
    property: string,
    value: string,
    page: number,
    size: number
  ) {
    this.setIsLoading(true);
    this.courseService
      .searchCourseByProperty(property, value, page, size)
      .subscribe({
        next: (data: any) => {
          if (data.totalRecords !== 0) {
            this.setState({
              courseList: this.fillEmpty(
                page - 1,
                size,
                this.state.courseList,
                data.data
              ),
            });
          } else {
            this.store.showNotif('No result found!', 'custom');
          }
          console.log('Searched list');
          console.log(this.state.courseList);
          console.log('Server response');
          console.log(data);
          this.setState({ totalItems: data.totalRecords });
          this.setState({ totalPages: data.totalPages });
          this.setState({ currentPage: data.pageNumber });
          this.setIsLoading(false);
        },
        error: (data: any) => {
          this.setIsLoading(false);
          this.store.showNotif(data.error.responseMessage, 'error');
          console.log(data);
        },
      });
  }

  searchInfiniteCourseByProperty(
    property: string,
    value: string,
    page: number,
    size: number
  ) {
    this.setIsLoading(true);
    this.courseService
      .searchCourseByProperty(property, value, page, size)
      .subscribe({
        next: (data: any) => {
          if (data.totalRecords !== 0) {
            this.setState({
              courseList: this.state.courseList.concat(data),
            });
          } else {
            this.store.showNotif('No result found!', 'custome');
          }
          console.log('Infite searched list');
          console.log(this.state.courseList);
          console.log('Server response');
          console.log(data);
          this.setState({ totalItems: data.totalRecords });
          this.setState({ totalPages: data.totalPages });
          this.setState({ currentPage: data.pageNumber });
          this.setIsLoading(false);
        },
        error: (data: any) => {
          this.setIsLoading(false);
          this.store.showNotif(data.error.responseMessage, 'error');
          console.log(data);
        },
      });
  }

  sortCourseByProperty(
    value: string,
    order: string,
    page: number,
    size: number
  ) {
    this.setIsLoading(true);
    this.courseService
      .sortCourseByProperty(value, order, page, size)
      .subscribe({
        next: (data: any) => {
          this.setState({ responseMsg: data });
          this.setState({
            courseList: this.fillEmpty(
              page - 1,
              size,
              this.state.courseList,
              data.data
            ),
          });
          this.setState({ totalItems: data.totalRecords });
          this.setState({ totalPages: data.totalPages });
          this.setState({ currentPage: data.pageNumber });
          console.log('Sorted list');
          console.log(this.state.courseList);
          console.log('Server response');
          console.log(data);
          this.setIsLoading(false);
        },
        error: (data: any) => {
          this.setIsLoading(false);
          this.store.showNotif(data.error.responseMessage, 'error');
          console.log(data);
        },
      });
  }

  sortInfiniteCourseByProperty(
    value: string,
    order: string,
    page: number,
    size: number
  ) {
    this.setIsLoading(true);
    this.courseService
      .sortCourseByProperty(value, order, page, size)
      .subscribe({
        next: (data: any) => {
          this.setState({
            courseList: this.state.courseList.concat(data),
          });
          console.log('Infite sorted list');
          console.log(this.state.courseList);
          console.log('Server response');
          console.log(data);
          this.setState({ totalItems: data.totalRecords });
          this.setState({ totalPages: data.totalPages });
          this.setState({ currentPage: data.pageNumber });
          this.setIsLoading(false);
        },
        error: (data: any) => {
          this.setIsLoading(false);
          this.store.showNotif(data.error.responseMessage, 'error');
          console.log(data);
        },
      });
  }

  getCourse(id: string) {
    this.setIsLoading(true);
    return this.courseService
      .getCourse(id)
      .toPromise()
      .then((data: any) => {
        this.setState({ courseInstance: data });
        console.log(data);
        this.setIsLoading(false);
      });
  }

  setExportData(array: Array<Course>) {
    this.setState({ courseList: array });
  }

  resetState() {
    this.setState(initialState);
  }
}
