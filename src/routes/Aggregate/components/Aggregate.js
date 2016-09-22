import React from 'react'

export const Aggregate = (props) => (
  <div style={{ margin: '0 auto' }} >
    <h2>Aggregates</h2>
    <div className='wrapper-md'>

      <div className='panel panel-default'>
        <div className='panel-heading'>
            <div className='row'>
                <div className='col-sm-11 hidden-xs'>
                    Aggregate - Cumulatives
                </div>
                <div className='col-sm-1 text-right text-center-xs'>                
                    <i className='fa fa-filter'></i>
                </div>
            </div>        
        </div>
        <div className='table-responsive'>
          <table className='table table-striped b-t b-light'>
            <thead>
                <tr className='hidden' id='filter-header-1'>
                    <th colSpan='11'>
                      <div className='row'>
                        <div className='col-sm-4 hidden-xs'>
                            <label className='sr-only'>Search</label>
                            <div className='input-group'>
                                <input type='text' className='form-control' placeholder='Add Filters' />
                                <div className='input-group-btn'>
                                    <button type='button' className='btn btn-default dropdown-toggle'><span className='fa fa-filter'></span></button>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-8 text-right text-center-xs'>                
                            <button className='btn m-b-xs btn-sm btn-info btn-addon'><i className='fa fa-times pull-right'></i>Prior Quarter Amount > $1000</button>
                            <button className='btn m-b-xs btn-sm btn-info btn-addon'><i className='fa fa-times pull-right'></i>Aggregate ID = 1</button>
                        </div>
                      </div>
                    </th>
              </tr>
              <tr>
                <th>Dataset</th>
                <th>Aggregate ID</th>
                <th>Description</th>
                <th>Type</th>
                <th>MDRM</th>
                <th>Dependency</th>
                <th>Type</th>
                <th width='12%'>Current Quarter Amount (Corporate)</th>
                <th width='10%'>Prior Quarter Amount (Corporate)</th>
                <th className='centered highlight-1'>QoQ ($)</th>
                <th className='centered highlight-1'>QoQ (%)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='centered'>US Reg</td>
                <td className='centered'>1</td>
                <td><span className='text-ellipsis'>Loans Secured by Real Estate</span></td>
                <td>MDRM</td>
                <td>1410</td>
                <td></td>
                <td className='centered'>Consolidated</td>
                <td className='centered'>$1,000</td>
                <td className='centered'>$1,020</td>
                <td className='centered highlight-1'>$20</td>
                <td className='centered highlight-1'>2%</td>
              </tr>
              <tr>
                <td className='centered'>US Reg</td>
                <td className='centered'>1</td>
                <td><span className='text-ellipsis'>Loans Secured by Real Estate</span></td>
                <td>MDRM</td>
                <td>1410</td>
                <td></td>
                <td className='centered'>Consolidated</td>
                <td className='centered'>$1,000</td>
                <td className='centered'>$1,020</td>
                <td className='centered highlight-1'>$20</td>
                <td className='centered highlight-1'>2%</td>
              </tr>
              <tr>
                <td className='centered'>US Reg</td>
                <td className='centered'>1</td>
                <td><span className='text-ellipsis'>Loans Secured by Real Estate</span></td>
                <td>MDRM</td>
                <td>1410</td>
                <td></td>
                <td className='centered'>Consolidated</td>
                <td className='centered'>$1,000</td>
                <td className='centered'>$1,020</td>
                <td className='centered highlight-1'>$20</td>
                <td className='centered highlight-1'>2%</td>
              </tr>
                <tr className='hidden'>
                    <td colSpan='11'>
                        <div className='panel panel-default'>
                            <div className='panel-heading'>
                              Loans Secured by Real Estate - view amounts by each sub LOB.
                            </div>                        
                            <table className='table table-striped b-t b-light'>
                            <thead>
                              <tr>
                                <th>Dataset</th>
                                <th>Aggregate ID</th>
                                <th>Description</th>
                                <th>Sub LOB</th>
                                <th>Type</th>
                                <th>MDRM</th>
                                <th>Dependency</th>
                                <th>Type</th>
                                <th width='12%'>Current Quarter Amount (Corporate)</th>
                                <th width='10%'>Prior Quarter Amount (Corporate)</th>
                              </tr>
                            </thead>    
                            <tbody>
                              <tr>
                                <td className='centered'>US Reg</td>
                                <td className='centered'>1</td>
                                <td className='centered'><span className='text-ellipsis'>Spread Management</span></td>
                                <td></td>
                                <td className='centered'>Sub MDRM</td>
                                <td className='centered'>K158</td>
                                <td className='centered'>F158</td>
                                <td className='centered'>Domestic</td>
                                <td className='centered'>$500</td>
                                <td className='centered'>$520</td>
                              </tr>
                              <tr>
                                <td className='centered'>US Reg</td>
                                <td className='centered'>1</td>
                                <td className='centered'><span className='text-ellipsis'>Spread Management</span></td>
                                <td></td>
                                <td className='centered'>Sub MDRM</td>
                                <td className='centered'>K158</td>
                                <td className='centered'>F158</td>
                                <td className='centered'>Domestic</td>
                                <td className='centered'>$500</td>
                                <td className='centered'>$520</td>
                              </tr>
                              <tr>
                                <td className='centered'>US Reg</td>
                                <td className='centered'>1</td>
                                <td className='centered'><span className='text-ellipsis'>Spread Management</span></td>
                                <td></td>
                                <td className='centered'>Sub MDRM</td>
                                <td className='centered'>K158</td>
                                <td className='centered'>F158</td>
                                <td className='centered'>Domestic</td>
                                <td className='centered'>$500</td>
                                <td className='centered'>$520</td>
                              </tr>
                                <tr className='hidden'>
                                    <td colSpan='10'>
                                        <div className='panel panel-default'>
                                            <div className='panel-heading'>
                                              Spread Management
                                            </div>                        
                                            <table className='table table-striped b-t b-light'>
                                                <thead>
                                                  <tr>
                                                    <th>Dataset</th>
                                                    <th>Aggregate ID</th>
                                                    <th>Description</th>
                                                    <th>Sub LOB</th>
                                                    <th>Type</th>
                                                    <th>MDRM</th>
                                                    <th>Dependency</th>
                                                    <th>Type</th>
                                                    <th width='12%'>Current Quarter Amount (Corporate)</th>
                                                    <th width='10%'>Prior Quarter Amount (Corporate)</th>
                                                  </tr>
                                                </thead>    
                                                <tbody>
                                                  <tr>
                                                    <td className='centered'>US Reg</td>
                                                    <td className='centered'>1</td>
                                                    <td className='centered'><span className='text-ellipsis'>Spread Management</span></td>
                                                    <td></td>
                                                    <td className='centered'>Sub MDRM</td>
                                                    <td className='centered'>K158</td>
                                                    <td className='centered'>F158</td>
                                                    <td className='centered'>Domestic</td>
                                                    <td className='centered'>$500</td>
                                                    <td className='centered'>$520</td>
                                                  </tr> 
                                                  <tr>
                                                    <td className='centered'>US Reg</td>
                                                    <td className='centered'>1</td>
                                                    <td className='centered'><span className='text-ellipsis'>Spread Management</span></td>
                                                    <td></td>
                                                    <td className='centered'>Sub MDRM</td>
                                                    <td className='centered'>K158</td>
                                                    <td className='centered'>F158</td>
                                                    <td className='centered'>Domestic</td>
                                                    <td className='centered'>$500</td>
                                                    <td className='centered'>$520</td>
                                                  </tr> 
                                                  <tr>
                                                    <td className='centered'>US Reg</td>
                                                    <td className='centered'>1</td>
                                                    <td className='centered'><span className='text-ellipsis'>Spread Management</span></td>
                                                    <td></td>
                                                    <td className='centered'>Sub MDRM</td>
                                                    <td className='centered'>K158</td>
                                                    <td className='centered'>F158</td>
                                                    <td className='centered'>Domestic</td>
                                                    <td className='centered'>$500</td>
                                                    <td className='centered'>$520</td>
                                                  </tr> 
                                                  <tr className='hidden'>
                                                    <td colSpan='10'>
                                                        <div className='panel panel-default'>
                                                            <div className='panel-heading'>
                                                              Spread Management
                                                            </div>                        
                                                            <table className='table table-striped b-t b-light'>
                                                                <thead>
                                                                  <tr>
                                                                    <th>Dataset</th>
                                                                    <th>Aggregate ID</th>
                                                                    <th>Description</th>
                                                                    <th>Sub LOB</th>
                                                                    <th>Type</th>
                                                                    <th>MDRM</th>
                                                                    <th>Dependency</th>
                                                                    <th>Type</th>
                                                                    <th width='12%'>Current Quarter Amount (Corporate)</th>
                                                                    <th width='10%'>Prior Quarter Amount (Corporate)</th>
                                                                  </tr>
                                                                </thead>    
                                                                <tbody>
                                                                  <tr>
                                                                    <td className='centered'>US Reg</td>
                                                                    <td className='centered'>1</td>
                                                                    <td className='centered'><span className='text-ellipsis'>Spread Management</span></td>
                                                                    <td></td>
                                                                    <td className='centered'>Sub MDRM</td>
                                                                    <td className='centered'>K158</td>
                                                                    <td className='centered'>F158</td>
                                                                    <td className='centered'>Domestic</td>
                                                                    <td className='centered'>$500</td>
                                                                    <td className='centered'>$520</td>
                                                                  </tr> 
                                                                  <tr>
                                                                    <td className='centered'>US Reg</td>
                                                                    <td className='centered'>1</td>
                                                                    <td className='centered'><span className='text-ellipsis'>Spread Management</span></td>
                                                                    <td></td>
                                                                    <td className='centered'>Sub MDRM</td>
                                                                    <td className='centered'>K158</td>
                                                                    <td className='centered'>F158</td>
                                                                    <td className='centered'>Domestic</td>
                                                                    <td className='centered'>$500</td>
                                                                    <td className='centered'>$520</td>
                                                                  </tr> 
                                                                  <tr>
                                                                    <td className='centered'>US Reg</td>
                                                                    <td className='centered'>1</td>
                                                                    <td className='centered'><span className='text-ellipsis'>Spread Management</span></td>
                                                                    <td></td>
                                                                    <td className='centered'>Sub MDRM</td>
                                                                    <td className='centered'>K158</td>
                                                                    <td className='centered'>F158</td>
                                                                    <td className='centered'>Domestic</td>
                                                                    <td className='centered'>$500</td>
                                                                    <td className='centered'>$520</td>
                                                                  </tr> 
                                                                  <tr>
                                                                    <td className='centered'>US Reg</td>
                                                                    <td className='centered'>1</td>
                                                                    <td className='centered'><span className='text-ellipsis'>Spread Management</span></td>
                                                                    <td></td>
                                                                    <td className='centered'>Sub MDRM</td>
                                                                    <td className='centered'>K158</td>
                                                                    <td className='centered'>F158</td>
                                                                    <td className='centered'>Domestic</td>
                                                                    <td className='centered'>$500</td>
                                                                    <td className='centered'>$520</td>
                                                                  </tr> 
                                                                  <tr>
                                                                    <td className='centered'>US Reg</td>
                                                                    <td className='centered'>1</td>
                                                                    <td className='centered'><span className='text-ellipsis'>Spread Management</span></td>
                                                                    <td></td>
                                                                    <td className='centered'>Sub MDRM</td>
                                                                    <td className='centered'>K158</td>
                                                                    <td className='centered'>F158</td>
                                                                    <td className='centered'>Domestic</td>
                                                                    <td className='centered'>$500</td>
                                                                    <td className='centered'>$520</td>
                                                                  </tr> 
                                                                </tbody>
                                                            </table>
                                                            <footer className='panel-footer'>
                                                              <div className='row'>
                                                                <div className='col-sm-4 hidden-xs'>
                                                                </div>
                                                                <div className='col-sm-4 text-center'>
                                                                  <small className='text-muted inline m-t-sm m-b-sm'>showing 20-30 of 50 records</small>
                                                                </div>
                                                                <div className='col-sm-4 text-right text-center-xs'>                
                                                                  <ul className='pagination pagination-sm m-t-none m-b-none'>
                                                                    <li><a href><i className='fa fa-chevron-left'></i></a></li>
                                                                    <li><a href>1</a></li>
                                                                    <li><a href>2</a></li>
                                                                    <li><a href>3</a></li>
                                                                    <li><a href>4</a></li>
                                                                    <li><a href>5</a></li>
                                                                    <li><a href><i className='fa fa-chevron-right'></i></a></li>
                                                                  </ul>
                                                                </div>
                                                              </div>
                                                            </footer>

                                                        </div>
                                                    </td>
                                                </tr>      
                                                  <tr className='hidden'></tr>    
                                                  <tr>
                                                    <td className='centered'>US Reg</td>
                                                    <td className='centered'>1</td>
                                                    <td className='centered'><span className='text-ellipsis'>Spread Management</span></td>
                                                    <td></td>
                                                    <td className='centered'>Sub MDRM</td>
                                                    <td className='centered'>K158</td>
                                                    <td className='centered'>F158</td>
                                                    <td className='centered'>Domestic</td>
                                                    <td className='centered'>$500</td>
                                                    <td className='centered'>$520</td>
                                                  </tr> 
                                                  <tr>
                                                    <td className='centered'>US Reg</td>
                                                    <td className='centered'>1</td>
                                                    <td className='centered'><span className='text-ellipsis'>Spread Management</span></td>
                                                    <td></td>
                                                    <td className='centered'>Sub MDRM</td>
                                                    <td className='centered'>K158</td>
                                                    <td className='centered'>F158</td>
                                                    <td className='centered'>Domestic</td>
                                                    <td className='centered'>$500</td>
                                                    <td className='centered'>$520</td>
                                                  </tr> 
                                                  <tr>
                                                    <td className='centered'>US Reg</td>
                                                    <td className='centered'>1</td>
                                                    <td className='centered'><span className='text-ellipsis'>Spread Management</span></td>
                                                    <td></td>
                                                    <td className='centered'>Sub MDRM</td>
                                                    <td className='centered'>K158</td>
                                                    <td className='centered'>F158</td>
                                                    <td className='centered'>Domestic</td>
                                                    <td className='centered'>$500</td>
                                                    <td className='centered'>$520</td>
                                                  </tr> 
                                                </tbody>
                                            </table>
                                            <footer className='panel-footer'>
                                              <div className='row'>
                                                <div className='col-sm-4 hidden-xs'>

                                                </div>
                                                <div className='col-sm-4 text-center'>
                                                  <small className='text-muted inline m-t-sm m-b-sm'>showing 20-30 of 50 items</small>
                                                </div>
                                                <div className='col-sm-4 text-right text-center-xs'>                
                                                  <ul className='pagination pagination-sm m-t-none m-b-none'>
                                                    <li><a href><i className='fa fa-chevron-left'></i></a></li>
                                                    <li><a href>1</a></li>
                                                    <li><a href>2</a></li>
                                                    <li><a href>3</a></li>
                                                    <li><a href>4</a></li>
                                                    <li><a href>5</a></li>
                                                    <li><a href><i className='fa fa-chevron-right'></i></a></li>
                                                  </ul>
                                                </div>
                                              </div>
                                            </footer>

                                        </div>
                                    </td>
                                </tr>
                                <tr className='hidden'></tr>
                              <tr>
                                <td className='centered'>US Reg</td>
                                <td className='centered'>1</td>
                                <td className='centered'><span className='text-ellipsis'>Spread Management</span></td>
                                <td></td>
                                <td className='centered'>Sub MDRM</td>
                                <td className='centered'>K158</td>
                                <td className='centered'>F158</td>
                                <td className='centered'>Domestic</td>
                                <td className='centered'>$500</td>
                                <td className='centered'>$520</td>
                              </tr>
                              <tr>
                                <td className='centered'>US Reg</td>
                                <td className='centered'>1</td>
                                <td className='centered'><span className='text-ellipsis'>Spread Management</span></td>
                                <td></td>
                                <td className='centered'>Sub MDRM</td>
                                <td className='centered'>K158</td>
                                <td className='centered'>F158</td>
                                <td className='centered'>Domestic</td>
                                <td className='centered'>$500</td>
                                <td className='centered'>$520</td>
                              </tr>
                            </tbody>

                        </table>
                        <footer className='panel-footer'>
                          <div className='row'>
                            <div className='col-sm-4 hidden-xs'>

                            </div>
                            <div className='col-sm-4 text-center'>
                              <small className='text-muted inline m-t-sm m-b-sm'>showing 20-30 of 50 items</small>
                            </div>
                            <div className='col-sm-4 text-right text-center-xs'>                
                              <ul className='pagination pagination-sm m-t-none m-b-none'>
                                <li><a href><i className='fa fa-chevron-left'></i></a></li>
                                <li><a href>1</a></li>
                                <li><a href>2</a></li>
                                <li><a href>3</a></li>
                                <li><a href>4</a></li>
                                <li><a href>5</a></li>
                                <li><a href><i className='fa fa-chevron-right'></i></a></li>
                              </ul>
                            </div>
                          </div>
                        </footer>

                        </div>
                    </td>
                </tr>
                <tr className='hidden'></tr>
              <tr>
                <td className='centered'>US Reg</td>
                <td className='centered'>1</td>
                <td><span className='text-ellipsis'>Loans Secured by Real Estate</span></td>
                <td>MDRM</td>
                <td>1410</td>
                <td></td>
                <td className='centered'>Consolidated</td>
                <td className='centered'>$1,000</td>
                <td className='centered'>$1,020</td>
                <td className='centered highlight-1'>$20</td>
                <td className='centered highlight-1'>2%</td>
              </tr>
              <tr>
                <td className='centered'>US Reg</td>
                <td className='centered'>1</td>
                <td><span className='text-ellipsis'>Loans Secured by Real Estate</span></td>
                <td>MDRM</td>
                <td>1410</td>
                <td></td>
                <td className='centered'>Consolidated</td>
                <td className='centered'>$1,000</td>
                <td className='centered'>$1,020</td>
                <td className='centered highlight-1'>$20</td>
                <td className='centered highlight-1'>2%</td>
              </tr>
              <tr>
                <td className='centered'>US Reg</td>
                <td className='centered'>1</td>
                <td><span className='text-ellipsis'>Loans Secured by Real Estate</span></td>
                <td>MDRM</td>
                <td>1410</td>
                <td></td>
                <td className='centered'>Consolidated</td>
                <td className='centered'>$1,000</td>
                <td className='centered'>$1,020</td>
                <td className='centered highlight-1'>$20</td>
                <td className='centered highlight-1'>2%</td>
              </tr>
            </tbody>
          </table>
            <footer className='panel-footer'>
              <div className='row'>
                <div className='col-sm-4 hidden-xs'>

                </div>
                <div className='col-sm-4 text-center'>
                  <small className='text-muted inline m-t-sm m-b-sm'>showing 20-30 of 50 items</small>
                </div>
                <div className='col-sm-4 text-right text-center-xs'>                
                  <ul className='pagination pagination-sm m-t-none m-b-none'>
                    <li><a href>1</a></li>
                    <li><a href>2</a></li>
                    <li><a href>3</a></li>
                    <li><a href>4</a></li>
                    <li><a href>5</a></li>
                  </ul>
                </div>
              </div>
            </footer>
        </div>
      </div>
    </div>
</div>
)

Aggregate.propTypes = {
    somefunc   : React.PropTypes.func.isRequired
}

export default Aggregate
