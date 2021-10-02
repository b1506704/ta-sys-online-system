(self.webpackChunkta_sys_online=self.webpackChunkta_sys_online||[]).push([[422],{53938:(t,e,s)=>{"use strict";s.d(e,{Q:()=>r});var o=s(42693),i=s(8619);let r=(()=>{class t{constructor(t){this.http=t,this.apiUrl="https://ta-sys-online-server.azurewebsites.net/api/Question"}fetchQuestion(t,e){const s=(new o.LE).set("PageNumber",t).set("PageSize",e);return console.log(s.toString()),this.http.get(this.apiUrl+"/paging",{params:s,reportProgress:!0,observe:"body"})}fetchQuestionByLearnerID(t,e,s){const i=(new o.LE).set("PageNumber",t).set("PageSize",e).set("Id",s);return console.log(i.toString()),this.http.get(this.apiUrl+"/byLearnerID",{params:i,reportProgress:!0,observe:"body"})}searchQuestionByProperty(t,e,s,i){const r=(new o.LE).set("Property",t).set("Value",e).set("PageNumber",s).set("PageSize",i);return console.log(r.toString()),this.http.get(this.apiUrl+"/search",{params:r,reportProgress:!0,observe:"body"})}filterQuestionByProperty(t,e,s,i){const r=(new o.LE).set("Value",e).set("Property",t).set("PageNumber",s).set("PageSize",i);return console.log(r.toString()),this.http.get(this.apiUrl+"/filter",{params:r,reportProgress:!0,observe:"body"})}filterSearchQuestionByProperty(t,e,s,i,r,a){const n=(new o.LE).set("FilterValue",e).set("FilterProperty",t).set("SearchValue",i).set("SearchProperty",s).set("PageNumber",r).set("PageSize",a);return console.log(n.toString()),this.http.get(this.apiUrl+"/filter-search",{params:n,reportProgress:!0,observe:"body"})}sortQuestionByProperty(t,e,s,i){const r=(new o.LE).set("SortBy",t).set("Order",e).set("PageNumber",s).set("PageSize",i);return console.log(r.toString()),this.http.get(this.apiUrl+"/paging",{params:r,reportProgress:!0,observe:"body"})}uploadQuestion(t){return this.http.post(this.apiUrl,t,{reportProgress:!0,observe:"body"})}generateRandomQuestion(){return this.http.post(this.apiUrl+"/randomQuestion",{reportProgress:!0,observe:"body"})}deleteQuestion(t){return this.http.post(this.apiUrl+"/delete",t,{reportProgress:!0,observe:"body"})}deleteAll(){return this.http.delete(this.apiUrl,{reportProgress:!0,observe:"body"})}getQuestion(t){return this.http.get(this.apiUrl+`/${t}`,{reportProgress:!0,observe:"body"})}updateQuestion(t){return this.http.put(this.apiUrl,t,{reportProgress:!0,observe:"body"})}fetchAll(){return this.http.get(this.apiUrl,{reportProgress:!0,observe:"body"})}}return t.\u0275fac=function(e){return new(e||t)(i.LFG(o.eN))},t.\u0275prov=i.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},32422:(t,e,s)=>{"use strict";s.d(e,{r:()=>c});var o=s(61305),i=s(41142),r=s(8619),a=s(53938),n=s(10418),l=s(6614);const h={questionList:[],selectedQuestion:{},questionInstance:void 0,exportData:[],totalPages:0,currentPage:0,totalItems:0,responseMsg:""};let c=(()=>{class t extends o.b{constructor(t,e,s){super(h),this.questionService=t,this.store=e,this.fileStore=s,this.$questionList=this.select(t=>t.questionList),this.$exportData=this.select(t=>t.exportData),this.$totalPages=this.select(t=>t.totalPages),this.$totalItems=this.select(t=>t.totalItems),this.$currentPage=this.select(t=>t.currentPage),this.$selectedQuestion=this.select(t=>t.selectedQuestion),this.$questionInstance=this.select(t=>t.questionInstance)}fillEmpty(t,e,s,o){let i=s;console.log("FILL INDEX");let r=t*e;console.log(r);for(var a=0;a<o.length;a++)i[r]=o[a],r++;return console.log("Filled array result"),console.log(i),i}fetchMediaBySourceID(t){const e=t.map(t=>t.id);this.fileStore.getFiles(e)}initInfiniteData(t,e){return this.questionService.fetchQuestion(t,e).toPromise().then(t=>{this.setState({questionList:t.data}),this.fetchMediaBySourceID(t.data),console.log("Current flag: infite list"),console.log(this.state.questionList),this.setState({totalItems:t.totalRecords}),this.setState({totalPages:t.totalPages}),this.setState({currentPage:t.pageNumber})})}loadInfiniteDataAsync(t,e){this.setIsLoading(!0),this.questionService.fetchQuestion(t,e).subscribe({next:t=>{this.setState({questionList:this.state.questionList.concat(t.data)}),this.fetchMediaBySourceID(t.data),console.log("Infinite list"),console.log(this.state.questionList),console.log("Server response"),console.log(t),this.setState({totalItems:t.totalRecords}),this.setState({totalPages:t.totalPages}),this.setState({currentPage:t.pageNumber}),this.setIsLoading(!1)},error:t=>{this.setIsLoading(!1),this.store.showNotif(t.error.responseMessage,"error"),console.log(t)}})}loadDataAsyncByLearnerID(t,e,s){this.setIsLoading(!0),this.questionService.fetchQuestionByLearnerID(t,e,s).subscribe({next:s=>{this.setState({questionList:this.fillEmpty(t-1,e,this.state.questionList,s.data)}),console.log("Pure list"),console.log(this.state.questionList),console.log("Server response"),console.log(s),this.setState({totalItems:s.totalRecords}),this.setState({totalPages:s.totalPages}),this.setState({currentPage:s.pageNumber}),this.setIsLoading(!1)},error:t=>{this.setIsLoading(!1),this.store.showNotif(t.error.responseMessage,"error"),console.log(t)}})}initInfiniteDataByLearnerID(t,e,s){return this.questionService.fetchQuestionByLearnerID(t,e,s).toPromise().then(t=>{this.setState({questionList:t.data}),console.log("Current flag: infite list"),console.log(this.state.questionList),this.setState({totalItems:t.totalRecords}),this.setState({totalPages:t.totalPages}),this.setState({currentPage:t.pageNumber})})}loadInfiniteDataAsyncByLearnerID(t,e,s){this.setIsLoading(!0),this.questionService.fetchQuestionByLearnerID(t,e,s).subscribe({next:t=>{this.setState({questionList:this.state.questionList.concat(t.data)}),console.log("Infinite list"),console.log(this.state.questionList),console.log("Server response"),console.log(t),this.setState({totalItems:t.totalRecords}),this.setState({totalPages:t.totalPages}),this.setState({currentPage:t.pageNumber}),this.setIsLoading(!1)},error:t=>{this.setIsLoading(!1),this.store.showNotif(t.error.responseMessage,"error"),console.log(t)}})}initData(t,e){this.questionService.fetchQuestion(t,e).toPromise().then(t=>{this.setState({questionList:new Array(t.totalRecords)}),console.log("Current flag: pure list"),console.log(this.state.questionList),this.setState({totalItems:t.totalRecords}),this.setState({totalPages:t.totalPages}),this.setState({currentPage:t.pageNumber})}).then(()=>{this.loadDataAsync(t,e)})}initFilterByPropertyData(t,e,s,o){this.store.showNotif("Filtered Mode On","custom"),this.questionService.filterQuestionByProperty(t,e,s,o).toPromise().then(t=>{this.setState({questionList:new Array(t.totalRecords)}),console.log("Current flag: filtered list"),console.log(this.state.questionList),this.setState({totalItems:t.totalRecords}),this.setState({totalPages:t.totalPages}),this.setState({currentPage:t.pageNumber})}).then(()=>{this.filterQuestionByProperty(t,e,s,o)})}initInfiniteFilterByPropertyData(t,e,s,o){this.store.showNotif("Filtered Mode On","custom"),this.questionService.filterQuestionByProperty(t,e,s,o).toPromise().then(t=>{this.setState({questionList:t.data}),this.fetchMediaBySourceID(t.data),console.log("Current flag: infinite filtered list"),console.log(this.state.questionList),this.setState({totalItems:t.totalRecords}),this.setState({totalPages:t.totalPages}),this.setState({currentPage:t.pageNumber})})}initSearchByPropertyData(t,e,s,o){this.store.showNotif("Searched Mode On","custom"),this.questionService.searchQuestionByProperty(t,e,s,o).toPromise().then(t=>{this.setState({questionList:new Array(t.totalRecords)}),console.log("Current flag: searched list"),console.log(this.state.questionList),this.setState({totalItems:t.totalRecords}),this.setState({totalPages:t.totalPages}),this.setState({currentPage:t.pageNumber})}).then(()=>{this.searchQuestionByProperty(t,e,s,o)})}initInfiniteSearchByPropertyData(t,e,s,o){this.store.showNotif("Searched Mode On","custom"),this.questionService.searchQuestionByProperty(t,e,s,o).toPromise().then(t=>{0!==t.totalRecords?(this.setState({questionList:t.data}),this.fetchMediaBySourceID(t.data)):this.store.showNotif("No result found!","custom"),console.log("Current flag: infitite searched list"),console.log(this.state.questionList),this.setState({totalItems:t.totalRecords}),this.setState({totalPages:t.totalPages}),this.setState({currentPage:t.pageNumber})})}initInfiniteFilterSearchByPropertyData(t,e,s,o,i,r){this.store.showNotif("Searched Mode On","custom"),this.questionService.filterSearchQuestionByProperty(t,e,s,o,i,r).toPromise().then(t=>{0!==t.totalRecords?(this.setState({questionList:t.data}),this.fetchMediaBySourceID(t.data)):this.store.showNotif("No result found!","custom"),console.log("Current flag: infitite searched list"),console.log(this.state.questionList),this.setState({totalItems:t.totalRecords}),this.setState({totalPages:t.totalPages}),this.setState({currentPage:t.pageNumber})})}initSortByPropertyData(t,e,s,o){this.store.showNotif("Sort Mode On","custom"),this.questionService.sortQuestionByProperty(t,e,s,o).toPromise().then(t=>{this.setState({questionList:new Array(t.totalRecords)}),console.log("Current flag: sort list"),console.log(this.state.questionList),this.setState({totalItems:t.totalRecords}),this.setState({totalPages:t.totalPages}),this.setState({currentPage:t.pageNumber})}).then(()=>{this.sortQuestionByProperty(t,e,s,o)})}initInfiniteSortByPropertyData(t,e,s,o){this.store.showNotif("Sort Mode On","custom"),this.questionService.sortQuestionByProperty(t,e,s,o).toPromise().then(t=>{this.setState({questionList:t.data}),this.fetchMediaBySourceID(t.data),console.log("Current flag: sort list"),console.log(this.state.questionList),this.setState({totalItems:t.totalRecords}),this.setState({totalPages:t.totalPages}),this.setState({currentPage:t.pageNumber})})}loadDataAsync(t,e){this.setIsLoading(!0),this.questionService.fetchQuestion(t,e).subscribe({next:s=>{this.setState({questionList:this.fillEmpty(t-1,e,this.state.questionList,s.data)}),console.log("Pure list"),console.log(this.state.questionList),console.log("Server response"),console.log(s),this.setState({totalItems:s.totalRecords}),this.setState({totalPages:s.totalPages}),this.setState({currentPage:s.pageNumber}),this.setIsLoading(!1)},error:t=>{this.setIsLoading(!1),this.store.showNotif(t.error.responseMessage,"error"),console.log(t)}})}refresh(t,e){this.setIsLoading(!0),this.questionService.fetchQuestion(t,e).subscribe({next:s=>{this.setState({questionList:this.fillEmpty(t-1,e,this.state.questionList,s.data)}),this.setState({totalItems:s.totalRecords}),this.setState({totalPages:s.totalPages}),this.setState({currentPage:s.pageNumber}),console.log("Pure list"),console.log(this.state.questionList),console.log("Server response"),console.log(s),this.store.showNotif("Refresh successfully","custom"),this.setIsLoading(!1)},error:t=>{this.setIsLoading(!1),this.store.showNotif(t.error.responseMessage,"error"),console.log(t)}})}setIsLoading(t){this.store.setIsLoading(t)}uploadQuestion(t,e,s){this.confirmDialog("").then(o=>{o&&(this.setIsLoading(!0),this.questionService.uploadQuestion(t).subscribe({next:t=>{this.setState({responseMsg:t}),this.setTotalItems(this.state.totalItems+1),console.log(t),this.loadDataAsync(e,s),this.setIsLoading(!1),this.store.showNotif(t.responseMessage,"custom")},error:t=>{this.setIsLoading(!1),this.store.showNotif(t.error.responseMessage,"error"),console.log(t)}}))})}updateQuestion(t,e,s){this.confirmDialog("").then(o=>{o&&(this.setIsLoading(!0),this.questionService.updateQuestion(t).subscribe({next:t=>{this.setState({responseMsg:t}),console.log(t),this.loadDataAsync(e,s),this.setIsLoading(!1),this.store.showNotif(t.responseMessage,"custom")},error:t=>{this.setIsLoading(!1),this.store.showNotif(t.error.responseMessage,"error"),console.log(t)}}))})}confirmDialog(t){return(0,i.iG)(""!=t?`<b>${t}</b>`:"<b>Are you sure?</b>","Confirm changes")}deleteSelectedQuestions(t,e,s){this.confirmDialog("").then(o=>{o&&(this.setIsLoading(!0),this.questionService.deleteQuestion(t).subscribe({next:t=>{this.setState({responseMsg:t}),console.log(t),this.loadDataAsync(e,s),console.log(this.state.questionList),this.setIsLoading(!1),this.store.showNotif(t.responseMessage,"custom")},error:t=>{this.setIsLoading(!1),this.store.showNotif(t.error.responseMessage,"error"),console.log(t)}}))})}deleteAll(){this.confirmDialog("Delete all items?").then(t=>{t&&(this.setIsLoading(!0),this.questionService.deleteAll().subscribe({next:t=>{this.resetState(),console.log(t),this.setIsLoading(!1),this.store.showNotif(t.responseMessage,"custom")},error:t=>{this.setIsLoading(!1),this.store.showNotif(t.error.responseMessage,"error"),console.log(t)}}))})}deleteQuestion(t,e,s){this.confirmDialog("").then(o=>{o&&(this.setIsLoading(!0),this.questionService.deleteQuestion(t).subscribe({next:t=>{this.setState({responseMsg:t}),this.setTotalItems(this.state.totalItems-1),console.log(t),this.loadDataAsync(e,s),this.setIsLoading(!1),this.store.showNotif(t.responseMessage,"custom")},error:t=>{this.setIsLoading(!1),this.store.showNotif(t.error.responseMessage,"error"),console.log(t)}}))})}selectQuestion(t){this.setState({selectedQuestion:t})}setTotalPages(t){this.setState({totalPages:t})}setTotalItems(t){this.setState({totalItems:t})}setCurrentPage(t){this.setState({currentPage:t})}filterQuestionByProperty(t,e,s,o){this.setIsLoading(!0),this.questionService.filterQuestionByProperty(t,e,s,o).subscribe({next:t=>{0!==t.totalRecords&&(this.setState({questionList:this.fillEmpty(s-1,o,this.state.questionList,t.data)}),console.log("Filtered list"),console.log(this.state.questionList),console.log("Server response"),console.log(t),this.setState({totalItems:t.totalRecords}),this.setState({totalPages:t.totalPages}),this.setState({currentPage:t.pageNumber})),this.setIsLoading(!1)},error:t=>{this.setIsLoading(!1),this.store.showNotif(t.error.responseMessage,"error"),console.log(t)}})}filterInfiniteQuestionByProperty(t,e,s,o){this.setIsLoading(!0),this.questionService.filterQuestionByProperty(t,e,s,o).subscribe({next:t=>{t.data.length&&(this.setState({questionList:this.state.questionList.concat(t.data)}),this.fetchMediaBySourceID(t.data)),console.log("Filtered list"),console.log(this.state.questionList),console.log("Server response"),console.log(t),this.setState({totalItems:t.totalRecords}),this.setState({totalPages:t.totalPages}),this.setState({currentPage:t.pageNumber}),this.setIsLoading(!1)},error:t=>{this.setIsLoading(!1),this.store.showNotif(t.error.responseMessage,"error"),console.log(t)}})}filterSearchInfiniteQuestionByProperty(t,e,s,o,i,r){this.setIsLoading(!0),this.questionService.filterSearchQuestionByProperty(t,e,s,o,i,r).subscribe({next:t=>{0!==t.totalRecords?t.data.length&&(this.setState({questionList:this.state.questionList.concat(t.data)}),this.fetchMediaBySourceID(t.data)):this.store.showNotif("No result found!","custom"),console.log("Infite searched list"),console.log(this.state.questionList),console.log("Server response"),console.log(t),this.setState({totalItems:t.totalRecords}),this.setState({totalPages:t.totalPages}),this.setState({currentPage:t.pageNumber}),this.setIsLoading(!1)},error:t=>{this.setIsLoading(!1),this.store.showNotif(t.error.responseMessage,"error"),console.log(t)}})}searchQuestionByProperty(t,e,s,o){this.setIsLoading(!0),this.questionService.searchQuestionByProperty(t,e,s,o).subscribe({next:t=>{0!==t.totalRecords?this.setState({questionList:this.fillEmpty(s-1,o,this.state.questionList,t.data)}):this.store.showNotif("No result found!","custom"),console.log("Searched list"),console.log(this.state.questionList),console.log("Server response"),console.log(t),this.setState({totalItems:t.totalRecords}),this.setState({totalPages:t.totalPages}),this.setState({currentPage:t.pageNumber}),this.setIsLoading(!1)},error:t=>{this.setIsLoading(!1),this.store.showNotif(t.error.responseMessage,"error"),console.log(t)}})}searchInfiniteQuestionByProperty(t,e,s,o){this.setIsLoading(!0),this.questionService.searchQuestionByProperty(t,e,s,o).subscribe({next:t=>{0!==t.totalRecords?t.data.length&&(this.setState({questionList:this.state.questionList.concat(t.data)}),this.fetchMediaBySourceID(t.data)):this.store.showNotif("No result found!","custome"),console.log("Infite searched list"),console.log(this.state.questionList),console.log("Server response"),console.log(t),this.setState({totalItems:t.totalRecords}),this.setState({totalPages:t.totalPages}),this.setState({currentPage:t.pageNumber}),this.setIsLoading(!1)},error:t=>{this.setIsLoading(!1),this.store.showNotif(t.error.responseMessage,"error"),console.log(t)}})}sortQuestionByProperty(t,e,s,o){this.setIsLoading(!0),this.questionService.sortQuestionByProperty(t,e,s,o).subscribe({next:t=>{this.setState({responseMsg:t}),this.setState({questionList:this.fillEmpty(s-1,o,this.state.questionList,t.data)}),this.setState({totalItems:t.totalRecords}),this.setState({totalPages:t.totalPages}),this.setState({currentPage:t.pageNumber}),console.log("Sorted list"),console.log(this.state.questionList),console.log("Server response"),console.log(t),this.setIsLoading(!1)},error:t=>{this.setIsLoading(!1),this.store.showNotif(t.error.responseMessage,"error"),console.log(t)}})}sortInfiniteQuestionByProperty(t,e,s,o){this.setIsLoading(!0),this.questionService.sortQuestionByProperty(t,e,s,o).subscribe({next:t=>{t.data.length&&(this.setState({questionList:this.state.questionList.concat(t.data)}),this.fetchMediaBySourceID(t.data)),console.log("Infite sorted list"),console.log(this.state.questionList),console.log("Server response"),console.log(t),this.setState({totalItems:t.totalRecords}),this.setState({totalPages:t.totalPages}),this.setState({currentPage:t.pageNumber}),this.setIsLoading(!1)},error:t=>{this.setIsLoading(!1),this.store.showNotif(t.error.responseMessage,"error"),console.log(t)}})}getQuestion(t){return this.setIsLoading(!0),this.questionService.getQuestion(t).toPromise().then(t=>{this.setState({questionInstance:t}),console.log(t),this.setIsLoading(!1)})}setExportData(t){this.setState({questionList:t})}resetState(){this.setState(h)}}return t.\u0275fac=function(e){return new(e||t)(r.LFG(a.Q),r.LFG(n.d),r.LFG(l.V))},t.\u0275prov=r.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);