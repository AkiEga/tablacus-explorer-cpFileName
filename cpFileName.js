var FV = GetFolderView(Ctrl, pt);
var Selected = FV.SelectedItems();
if(Selected.Count != 0){
  var str= fso.GetFilename(Selected.Item(i).Path);

  for (var i = 1; i < Selected.Count; i++) {
      str += '\n' + fso.GetFilename(Selected.Item(i).Path);
  }
  clipboardData.setData("text", str);
}