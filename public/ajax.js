$(document).on('click', '.view_data', function(){

    var employee_id = $(this).attr("id");
    $.ajax({
     url:"/auth/view",
     method:"POST",
     data:{employee_id:employee_id},
     success:function(results){
      console.log(results);
      let employee_detail = $('#employee_detail');
      employee_detail.html('');
      results.forEach(result => {
          employee_detail.append(`
          <h6> <i>ID:</i> ${result.id}</h6>
          <h6> <i>Họ:</i> ${result.ho}</h6>
          <h6> <i>Tên</i>: ${result.ten}</h6>
          <h6> <i>Lớp:</i> ${result.lop}</h6>
          <h6> <i>MSV:</i> ${result.msv}</h6>
          <h6> <i>SĐT:</i> ${result.sdt}</h6>
          <h6> <i>EMAIL:</i> ${result.email}</h6>
          `)
            
          
      })
      $('#dataModal').modal('show');
     }
    });
  
   });
  
   $(document).on('click', '.update_data', function(){
   
    var employee_id = $(this).attr("id");
    $.ajax({
     url:"/auth/update",
     method:"POST",
     data:{employee_id:employee_id},
     success:function(results){
         console.log(results);
         let employee_detail_sua = $('#employee_detail_sua');  
      employee_detail_sua.html('');
      results.forEach(result => {
        employee_detail_sua.append(`
        <form action="/auth/xuli_update" method="POST"  id="insert_form" style="margin-right: 40px ;margin-top: 0px;" >
        
        <input type="hidden" name="id" value="${result.id}" / class="form-control"  > <br>
        Tên: <br>
            <input type="text" name="ten" value="${result.ten}" style="border-radius: 4px; border-color: black;"><br>
            Họ:<br>
            <input type="text" name="ho" value="${result.ho}" style="border-radius: 4px; border-color: black;"><br>
            Lớp:<br>
            <input type="radio" name="lop" value="58th1" checked> 58TH1<br>
            <input type="radio" name="lop" value="58th2"> 58TH2<br>
            MSV:<br>
            <input type="text" name="msv" value="${result.msv}" style="border-radius: 4px; border-color: black;"><br>
            SĐT:<br>
            <input type="text" name="sdt" value="${result.sdt}" style="border-radius: 4px; border-color: black;"><br>
            Email:<br>
            <input type="email" id="email" name="email" value="${result.email}" style="border-radius: 4px; border-color: black;"><br><br>
            <input type="submit" name="" id="insert" value="Update" style="margin-right: 0px; padding-right: 12px;" class="btn btn-success" />
            </form>
        `)
          
        
    })

      $('#dataModal_sua').modal('show');
     },
    
    });
   });
   
   
  