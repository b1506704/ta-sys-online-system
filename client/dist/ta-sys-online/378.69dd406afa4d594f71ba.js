(self.webpackChunkta_sys_online=self.webpackChunkta_sys_online||[]).push([[378],{71378:(e,t,i)=>{"use strict";i.r(t),i.d(t,{EditQuestionListModule:()=>v});var o=i(61116),n=i(46553),s=i(23167),r=i(98633),a=i(65294),l=i(23651),c=(i(52279),i(62707)),h=i(82051),d=i.n(h),u=i(8619),g=i(32422),p=i(10418),S=i(53938),y=i(41612),x=i(69333),m=i(52177),f=i(86101),w=i(83584);function b(e,t){if(1&e&&(u.TgZ(0,"div"),u.TgZ(1,"div",9),u._uU(2),u.qZA(),u.qZA()),2&e){const e=u.oxw();u.xp6(2),u.Oqu(e.selectInfoText)}}function P(e,t){if(1&e&&(u.TgZ(0,"div"),u.TgZ(1,"span"),u._uU(2),u.qZA(),u.qZA()),2&e){const e=u.oxw(2);u.xp6(2),u.hij("Total Question: ",e.questionList.length," ")}}function T(e,t){if(1&e){const e=u.EpF();u.ynx(0),u.TgZ(1,"dx-data-grid",10),u.NdJ("selectedRowKeysChange",function(t){return u.CHM(e),u.oxw().selectedRows=t})("onOptionChanged",function(t){return u.CHM(e),u.oxw().onOptionChanged(t)})("onSelectionChanged",function(){return u.CHM(e),u.oxw().selectionChangedHandler()})("onEditingStart",function(){return u.CHM(e),u.oxw().onEditingStart()})("onInitNewRow",function(){return u.CHM(e),u.oxw().onInitNewRow()})("onSaved",function(t){return u.CHM(e),u.oxw().onSaved(t)})("onEditCanceled",function(){return u.CHM(e),u.oxw().onEditCanceled()})("onToolbarPreparing",function(t){return u.CHM(e),u.oxw().onToolbarPreparing(t)}),u._UZ(2,"dxo-editing",11),u._UZ(3,"dxo-selection",12),u._UZ(4,"dxo-grouping",13),u._UZ(5,"dxo-column-chooser",14),u._UZ(6,"dxo-paging",15),u._UZ(7,"dxo-pager",16),u._UZ(8,"dxo-load-panel",17),u.TgZ(9,"dxi-column",18),u._UZ(10,"dxi-validation-rule",19),u.qZA(),u.TgZ(11,"dxi-column",20),u._UZ(12,"dxi-validation-rule",19),u.qZA(),u.TgZ(13,"dxi-column",21),u._UZ(14,"dxi-validation-rule",19),u.qZA(),u.TgZ(15,"dxi-column",22),u._UZ(16,"dxi-validation-rule",19),u.qZA(),u.YNc(17,P,3,1,"div",23),u.qZA(),u.BQk()}if(2&e){const e=u.oxw();u.xp6(1),u.Q6J("dataSource",e.questionList)("showBorders",!0)("allowColumnReordering",!0)("rowAlternationEnabled",!0)("columnHidingEnabled",!0)("selectedRowKeys",e.selectedRows)("sorting",!1),u.xp6(1),u.Q6J("allowUpdating",!0)("allowDeleting",!0)("allowAdding",!0)("useIcons",!0)("selectTextOnEditStart",!0),u.xp6(1),u.Q6J("selectAllMode","page")("showCheckBoxesMode","onClick"),u.xp6(1),u.Q6J("contextMenuEnabled",!0),u.xp6(1),u.Q6J("enabled",!0),u.xp6(1),u.Q6J("pageSize",e.pageSize),u.xp6(1),u.Q6J("visible",!0)("displayMode","adaptive")("allowedPageSizes",e.allowedPageSizes)("showPageSizeSelector",!0)("showNavigationButtons",!0),u.xp6(1),u.Q6J("enabled",!0),u.xp6(9),u.Q6J("dxTemplateOf","totalQuestionCount")}}const I=function(){return{paddingLeft:"25px",paddingRight:"25px"}},C=[{path:"",component:(()=>{class e{constructor(e,t,i,o,n){this.questionStore=e,this.store=t,this.questionHTTP=i,this.subjectStore=o,this.router=n,this.subjectList=[],this.pageSize=5,this.allowedPageSizes=[5,10,15],this.scrollingMode="standard",this.currentSortProperty="maxScore",this.currentSearchProperty="name",this.currentFilterProperty="subjectId"}onToolbarPreparing(e){e.toolbarOptions.items.unshift({location:"before",template:"totalQuestionCount"},{location:"after",locateInMenu:"auto",widget:"dxButton",options:{type:"normal",icon:"refresh",hint:"Fetch data from server",onClick:this.onRefresh.bind(this)}},{location:"after",locateInMenu:"auto",widget:"dxButton",options:{type:"danger",icon:"trash",hint:"Delete all items",onClick:this.deleteAll.bind(this)}},{location:"after",locateInMenu:"auto",widget:"dxButton",options:{type:"danger",icon:"parentfolder",hint:"Generate random 100+ items",onClick:this.onAddRandom.bind(this)}},{location:"after",locateInMenu:"auto",widget:"dxButton",options:{type:"normal",icon:"exportpdf",hint:"Export to PDF",onClick:this.exportGridToPdf.bind(this)}},{location:"after",locateInMenu:"auto",widget:"dxButton",options:{type:"normal",icon:"xlsxfile",hint:"Export to Excel",onClick:this.exportDataGridToExcel.bind(this)}},{location:"before",widget:"dxTextBox",options:{valueChangeEvent:"keyup",showClearButton:!0,onKeyUp:this.onSearchKeyupHandler.bind(this),onValueChanged:this.onSearchValueChanged.bind(this),mode:"search",placeholder:"Search name"}},{location:"center",locateInMenu:"auto",widget:"dxButton",options:{type:"normal",icon:"filter",disabled:!0,hint:"Filter with subject"}},{location:"center",locateInMenu:"auto",widget:"dxSelectBox",options:{items:this.subjectList,valueExpr:"id",searchExpr:"name",displayExpr:"name",placeholder:"Filter with subject",searchEnabled:!0,onValueChanged:this.onFilterChange.bind(this)}},{location:"center",locateInMenu:"auto",widget:"dxButton",options:{type:"normal",icon:"card",disabled:!0,hint:"Sort by total cost"}},{location:"center",locateInMenu:"auto",widget:"dxSelectBox",options:{items:[{id:"-1",name:"(NONE)"},{id:"0",name:"asc"},{id:"1",name:"desc"}],valueExpr:"name",placeholder:"Sort by name",displayExpr:"name",onValueChanged:this.onSortValueChanged.bind(this)}})}onSearchKeyupHandler(e){clearTimeout(this.timeout),this.timeout=setTimeout(()=>{this.isSearchingByName=!0,this.isFilteringByCategory=!1,this.isSortingByName=!1,console.log(this.currentSearchByPropertyValue),""!==this.currentSearchByPropertyValue?this.questionStore.initSearchByPropertyData(this.currentSearchProperty,this.currentSearchByPropertyValue,this.dataGrid.instance.pageIndex()+1,this.pageSize):(this.store.showNotif("SEARCH MODE OFF","custom"),this.onRefresh())},1250)}onSearchValueChanged(e){this.currentSearchByPropertyValue=e.value}onSortValueChanged(e){this.isSortingByName=!0,this.isSearchingByName=!1,this.isFilteringByCategory=!1,this.currentSortByPropertyValue=e.value,"(NONE)"!==e.value?this.questionStore.initSortByPropertyData(this.currentSortProperty,e.value,this.dataGrid.instance.pageIndex()+1,this.pageSize):(this.store.showNotif("SORT MODE OFF","custom"),this.onRefresh())}onFilterChange(e){this.isFilteringByCategory=!0,this.isSearchingByName=!1,this.isSortingByName=!1,this.currentFilterByPropertyValue=e.value,console.log(e.value),"(NONE)"!==e.value?this.questionStore.initFilterByPropertyData(this.currentFilterProperty,e.value,this.dataGrid.instance.pageIndex()+1,this.pageSize):(this.store.showNotif("FILTER MODE OFF","custom"),this.onRefresh())}checkEditorMode(){return!0===this.isFilteringByCategory?"FILTER":!0===this.isSearchingByName?"SEARCH":!0===this.isSortingByName?"SORT":"NORMAL"}onOptionChanged(e){const t=this.checkEditorMode();if("paging.pageIndex"===e.fullName){const i=e.value+1;switch(console.log(`New page index: ${i}. Total items: ${this.questionList.length}`),t){case"NORMAL":this.paginatePureData(i);break;case"FILTER":this.paginateFilterData(i);break;case"SEARCH":this.paginateSearchData(i);break;case"SORT":this.paginateSortData(i)}}if("paging.pageSize"===e.fullName)switch(this.pageSize=e.value,console.log(`Page size changed to ${e.value}`),t){case"NORMAL":this.questionStore.loadDataAsync(this.currentIndexFromServer,e.value),this.goToPage(this.currentIndexFromServer);break;case"FILTER":this.questionStore.filterQuestionByProperty(this.currentFilterProperty,this.currentFilterByPropertyValue,this.currentIndexFromServer,e.value),this.goToPage(this.currentIndexFromServer);break;case"SEARCH":this.questionStore.searchQuestionByProperty(this.currentSearchProperty,this.currentSearchByPropertyValue,this.currentIndexFromServer,e.value),this.goToPage(this.currentIndexFromServer);break;case"SORT":this.questionStore.sortQuestionByProperty(this.currentSortProperty,this.currentSortByPropertyValue,this.currentIndexFromServer,e.value),this.goToPage(this.currentIndexFromServer)}}paginatePureData(e){this.questionStore.loadDataAsync(e,this.pageSize)}paginateFilterData(e){this.questionStore.filterQuestionByProperty(this.currentFilterProperty,this.currentFilterByPropertyValue,e,this.pageSize)}paginateSearchData(e){this.questionStore.searchQuestionByProperty(this.currentSearchProperty,this.currentSearchByPropertyValue,e,this.pageSize)}paginateSortData(e){this.questionStore.sortQuestionByProperty(this.currentSortProperty,this.currentSortByPropertyValue,e,this.pageSize)}onEditingStart(){this.store.showNotif("Edit mode on","custom")}onInitNewRow(){this.store.showNotif("Blank row added, please fill in information","custom")}onSaved(e){if(e.changes.length)switch(e.changes[0].type){case"insert":this.questionStore.uploadQuestion(e.changes[0].data,this.dataGrid.instance.pageIndex()+1,this.pageSize);break;case"update":console.log(e.changes[0]),this.questionStore.updateQuestion(e.changes[0].data,this.dataGrid.instance.pageIndex()+1,this.pageSize);break;case"remove":this.questionStore.deleteQuestion([e.changes[0].key],this.dataGrid.instance.pageIndex()+1,this.pageSize)}else this.store.showNotif("No changes dectected","custom")}onEditCanceled(){this.store.showNotif("Editing cancelled","custom")}selectionChangedHandler(){this.selectedRows.length?(this.isSelectInfoVisible=!0,this.selectInfoText=`${this.selectedRows.length} rows selected`,this.selectedRows.forEach(e=>{console.log(e)})):this.isSelectInfoVisible=!1}changePageSize(e){this.dataGrid.instance.pageSize(e)}goToPage(e){this.dataGrid.instance.pageIndex(e)}deleteSelectedItems(){this.store.setIsLoading(!0);const e=this.checkEditorMode();this.selectedRows.length&&this.questionStore.confirmDialog("").then(t=>{t&&this.questionHTTP.deleteQuestion(this.selectedRows).toPromise().then(()=>{switch(this.store.showNotif(`${this.selectedRows.length} items deleted`,"custom"),this.clearSelection(),e){case"NORMAL":this.questionStore.initData(this.dataGrid.instance.pageIndex()+1,this.pageSize);break;case"FILTER":this.questionStore.initFilterByPropertyData(this.currentFilterProperty,this.currentFilterByPropertyValue,this.dataGrid.instance.pageIndex()+1,this.pageSize);break;case"SORT":this.questionStore.initSortByPropertyData(this.currentSortProperty,this.currentSortByPropertyValue,this.dataGrid.instance.pageIndex()+1,this.pageSize);break;case"SEARCH":this.questionStore.initSearchByPropertyData(this.currentSearchProperty,this.currentSearchByPropertyValue,this.dataGrid.instance.pageIndex()+1,this.pageSize)}this.isSelectInfoVisible=!1}).then(()=>{this.store.setIsLoading(!1)})})}clearSelection(){this.selectedRows=[]}onRefresh(){this.isFilteringByCategory=!1,this.isSearchingByName=!1,this.isSortingByName=!1,this.questionStore.initData(this.dataGrid.instance.pageIndex()+1,this.pageSize)}onAddRandom(){this.questionStore.confirmDialog("This will generate random 100+ items in database. Are you sure").then(e=>{e&&(this.isFilteringByCategory=!1,this.store.setIsLoading(!0),this.questionHTTP.generateRandomQuestion().toPromise().then(()=>{this.questionStore.initData(this.dataGrid.instance.pageIndex()+1,this.pageSize)}).then(()=>{this.store.setIsLoading(!1),this.store.showNotif("Generated 100+ random items","custom")}))})}exportDataGridToExcel(){this.questionStore.confirmDialog("This will export all fetched data to excel. Are you sure?").then(e=>{e&&(this.store.setIsLoading(!0),this.questionHTTP.fetchAll().toPromise().then(e=>{this.questionStore.setExportData(e),console.log(e),setTimeout(()=>{const e=new c.Workbook,t=e.addWorksheet("Question List");(0,r.d)({component:this.dataGrid.instance,worksheet:t,autoFilterEnabled:!0}).then(()=>{e.xlsx.writeBuffer().then(e=>{d()(new Blob([e],{type:"application/octet-stream"}),"Question_List.xlsx"),this.store.setIsLoading(!1),this.store.showNotif("Export succesully","custom")})})},200)}))})}exportGridToPdf(e){this.questionStore.confirmDialog("This will export all data to pdf. Are you sure?").then(e=>{e&&(this.store.setIsLoading(!0),this.questionHTTP.fetchAll().toPromise().then(e=>{this.questionStore.setExportData(e),console.log(e),setTimeout(()=>{const e=new l.jsPDF;(0,a.d)({jsPDFDocument:e,component:this.dataGrid.instance}).then(()=>{e.save("Question_List.pdf"),this.store.setIsLoading(!1),this.store.showNotif("Export succesully","custom")})},200)}))})}deleteAll(){this.questionStore.deleteAll()}navigateToStatistics(){this.router.navigate(["/statistics"])}sourceDataListener(){return this.questionStore.$questionList.subscribe(e=>{this.questionList=e})}currentPageListener(){return this.questionStore.$currentPage.subscribe(e=>{this.currentIndexFromServer=e})}ngOnInit(){this.sourceDataListener(),this.currentPageListener(),this.subjectStore.fetchAll().then(e=>{0!==e.length&&(console.log("FILTER DATA: "),console.log(e),this.subjectList=e,this.subjectList.unshift({id:"(NONE)",name:"(NONE)"}),setTimeout(()=>{this.onRefresh()},150))})}ngOnDestroy(){this.sourceDataListener().unsubscribe(),this.currentPageListener().unsubscribe(),this.questionStore.resetState()}}return e.\u0275fac=function(t){return new(t||e)(u.Y36(g.r),u.Y36(p.d),u.Y36(S.Q),u.Y36(y.Z),u.Y36(n.F0))},e.\u0275cmp=u.Xpm({type:e,selectors:[["app-edit-question-list"]],viewQuery:function(e,t){if(1&e&&u.Gf(s.e,5),2&e){let e;u.iGM(e=u.CRH())&&(t.dataGrid=e.first)}},decls:9,vars:7,consts:[[3,"ngStyle"],[3,"location","text"],["location","center","locateInMenu","auto",3,"visible"],[4,"dxTemplate"],["location","center","locateInMenu","auto"],["icon","trash","type","danger","hint","Delete current selected items",3,"visible","onClick"],["location","after","locateInMenu","auto"],["icon","arrowright","type","outline","text","Statistics","hint","Navigate to Statistics",3,"onClick"],[4,"ngIf"],[2,"font-size","small"],["id","gridContainer","keyExpr","id",3,"dataSource","showBorders","allowColumnReordering","rowAlternationEnabled","columnHidingEnabled","selectedRowKeys","sorting","selectedRowKeysChange","onOptionChanged","onSelectionChanged","onEditingStart","onInitNewRow","onSaved","onEditCanceled","onToolbarPreparing"],[3,"allowUpdating","allowDeleting","allowAdding","useIcons","selectTextOnEditStart"],["mode","multiple",3,"selectAllMode","showCheckBoxesMode"],["expandMode","rowClick",3,"contextMenuEnabled"],["mode","select",3,"enabled"],[3,"pageSize"],[3,"visible","displayMode","allowedPageSizes","showPageSizeSelector","showNavigationButtons"],[3,"enabled"],["dataField","testId"],["type","required"],["dataField","content"],["dataField","score","dataType","number"],["dataField","totalCorrectAnswer","dataType","number"],[4,"dxTemplate","dxTemplateOf"]],template:function(e,t){1&e&&(u.TgZ(0,"dx-toolbar",0),u._UZ(1,"dxi-item",1),u.TgZ(2,"dxi-item",2),u.YNc(3,b,3,1,"div",3),u.qZA(),u.TgZ(4,"dxi-item",4),u.TgZ(5,"dx-button",5),u.NdJ("onClick",function(){return t.deleteSelectedItems()}),u.qZA(),u.qZA(),u.TgZ(6,"dxi-item",6),u.TgZ(7,"dx-button",7),u.NdJ("onClick",function(){return t.navigateToStatistics()}),u.qZA(),u.qZA(),u.qZA(),u.YNc(8,T,18,24,"ng-container",8)),2&e&&(u.Q6J("ngStyle",u.DdM(6,I)),u.xp6(1),u.Q6J("location","before")("text","Question Mananagement"),u.xp6(1),u.Q6J("visible",t.isSelectInfoVisible),u.xp6(3),u.Q6J("visible",t.isSelectInfoVisible),u.xp6(3),u.Q6J("ngIf",0!==t.subjectList.length))},directives:[x.G,o.PC,m.ZT3,f.p6,w.K,o.O5,s.e,m.Uo8,m.Lz9,m.uCj,m.Auv,m.sXh,m.ilc,m.mKI,m.qvW,m.vrV],styles:[""]}),e})()}];let B=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=u.oAB({type:e}),e.\u0275inj=u.cJS({imports:[[n.Bz.forChild(C)],n.Bz]}),e})(),v=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=u.oAB({type:e}),e.\u0275inj=u.cJS({imports:[[o.ez,B,s.x,x.k,w.e]]}),e})()}}]);